<?php

namespace con4gis\MapsBundle\Migration;

use Contao\CoreBundle\Migration\MigrationInterface;
use Contao\CoreBundle\Migration\MigrationResult;
use Contao\StringUtil;
use Doctrine\DBAL\Connection;
use Psr\Log\LoggerInterface;

class UpdateArraysMigration implements MigrationInterface
{

    private array $routerFields = [
        'router_profiles', // simple_array
        'customProfiles', // json
        'routerLayers', // json
    ];

    private array $editorFields = [
        'editor_vars', // json
        'types' // json
    ];

    public function __construct(
        private readonly Connection $connection,
        private readonly LoggerInterface $logger,
    ) {
    }

    public function getName(): string
    {
        return "con4gis_maps_update_arrays_migration";
    }

    public function shouldRun(): bool
    {
        $sql = "SELECT router_profiles, customProfiles,routerLayers FROM tl_c4g_routing_configuration";
        $routingConfigs = $this->connection->executeQuery($sql)->fetchAllAssociative();

        $sql = "SELECT editor_vars,types FROM tl_c4g_editor_configuration";
        $editorConfigs = $this->connection->executeQuery($sql)->fetchAllAssociative();

        // TODO check if database type for array fields was updated (if needs to after entity change)
        foreach ($routingConfigs as $config) {
            foreach ($this->routerFields as $field) {
                if ($this->checkForSerializedValue($config[$field])) {
                    return true;
                }
            }
        }

        foreach ($editorConfigs as $config) {
            foreach ($this->editorFields as $field) {
                if ($this->checkForSerializedValue($config[$field])) {
                    return true;
                }
            }
        }

        return false;
    }

    public function run(): MigrationResult
    {
        $updatedRouterConfigs = 0;
        $updatedEditorConfigs = 0;

        $sql = "SELECT id,router_profiles, customProfiles,routerLayers FROM tl_c4g_routing_configuration";
        $routingConfigs = $this->connection->executeQuery($sql)->fetchAllAssociative();

        if ($this->shouldRun()) {
            $this->logger->info("Running migration...");
            foreach ($routingConfigs as $config) {

                // check again if we have to migrate these router fields
                if ($this->checkForSerializedValue($config['router_profiles'])) {
                    $routerProfiles = StringUtil::deserialize($config['router_profiles'], true);
                    $routerProfiles = implode(",", $routerProfiles);
                }

                if ($this->checkForSerializedValue($config['customProfiles'])) {
                    $customProfiles = StringUtil::deserialize($config['customProfiles'], true);
//                    $customProfiles = implode(",", $customProfiles);
                    $customProfiles = json_encode($customProfiles);
                }

                if ($this->checkForSerializedValue($config['routerLayers'])) {
                    $routerLayers = StringUtil::deserialize($config['routerLayers'], true);
                    $routerLayers = json_encode($routerLayers);
                }

                $sql = "UPDATE tl_c4g_routing_configuration SET router_profiles = ?, customProfiles = ?, routerLayers = ? WHERE id=?";
                $this->connection->executeQuery(
                    $sql,
                    [
                        $routerProfiles ?? $config['router_profiles'],
                        $customProfiles ?? $config['customProfiles'],
                        $routerLayers ?? $config['routerLayers'],
                        $config['id']
                    ]
                );
                $updatedRouterConfigs++;
            }

            $sql = "SELECT id,editor_vars,types FROM tl_c4g_editor_configuration";
            $editorConfigs = $this->connection->executeQuery($sql)->fetchAllAssociative();

            foreach ($editorConfigs as $config) {
                $editorVars = StringUtil::deserialize($config['editor_vars'], true);
                $types = StringUtil::deserialize($config['types'], true);

                $editorVars = json_encode($editorVars);
                $types = json_encode($types);

                $sql = "UPDATE tl_c4g_editor_configuration SET editor_vars = ?, types = ? WHERE id=?";
                $this->connection->executeQuery(
                    $sql,
                    [
                        $editorVars,
                        $types,
                        $config['id']
                    ]
                );
                $updatedEditorConfigs++;
            }

            return new MigrationResult(
                true,
                sprintf(
                    "Es wurden %d Router-Konfigurationen und %d Editor-Konfigurationen aktualisiert",
                    $updatedRouterConfigs,
                    $updatedEditorConfigs
                )
            );
        } else {

            return new MigrationResult(
                true,
                "Keine Migration erforderlich."
            );
        }

    }

    private function checkForSerializedValue($value)
    {
        if (!is_string($value)) {
            return false;
        }

        if (str_starts_with($value, "a:")) {
            // serialized array
            return true;
        }

        return false;
    }
}