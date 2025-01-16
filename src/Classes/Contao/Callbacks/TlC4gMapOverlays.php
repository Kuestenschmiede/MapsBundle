<?php

namespace con4gis\MapsBundle\Classes\Contao\Callbacks;

use Contao\Image;
use Contao\Backend;
use Contao\BackendUser;
use Contao\Input;
use Contao\StringUtil;
use Contao\System;
use Contao\Versions;
use con4gis\MapsBundle\Classes\Caches\C4GMapsAutomator;


/**
 * Class tl_c4g_map_overlays
 */
class TlC4gMapOverlays extends Backend
{
    /**
     * List a Location Style
     * @param array
     * @return string
     */
    public function listOverlays($row)
    {
        return '<div style="float:left;">' . $row ['name'] . "</div>\n";
    }

    public function toggleIcon($row, $href, $label, $title, $icon, $attributes)
    {
        $this->import(BackendUser::class, 'User');

        if (strlen(Input::get('tid')))
        {
            $state = Input::get('state');
            $this->toggleVisibility(Input::get('tid'), ($state == ""));
            $this->redirect($this->getReferer());
        }

        // Check permissions AFTER checking the tid, so hacking attempts are logged
        if (!$this->User->isAdmin && !$this->User->hasAccess('tl_c4g_map_overlays::published', 'alexf'))
        {
            return '';
        }

        $href .= '&amp;id='.Input::get('id').'&amp;tid='.$row['id'].'&amp;state='.($row['published'] ? '' : 1);

        if (!$row['published'])
        {
            $icon = 'invisible.svg';
        }

        return '<a href="'.$this->addToUrl($href).'" title="'.StringUtil::specialchars($title).'"'.$attributes.'>'.Image::getHtml($icon, $label).'</a> ';
    }

    public function toggleVisibility($intId, $blnPublished)
    {
        // Check permissions to publish
        if (!$this->User->isAdmin && !$this->User->hasAccess('tl_c4g_map_overlays::published', 'alexf'))
        {
            $this->log('Not enough permissions to show/hide record ID "'.$intId.'"', 'tl_c4g_map_overlays toggleVisibility', TL_ERROR);
            $this->redirect(System::getContainer()->get('router')->generate('contao_backend').'?act=error');
        }

        $objVersions = new Versions('tl_c4g_map_overlays', $intId);
        $objVersions->initialize();
        // Trigger the save_callback
        if (is_array($GLOBALS['TL_DCA']['tl_c4g_map_overlays']['fields']['published']['save_callback']))
        {
            foreach ($GLOBALS['TL_DCA']['tl_c4g_map_overlays']['fields']['published']['save_callback'] as $callback)
            {
                $this->import($callback[0]);
                $blnPublished = $this->$callback[0]->$callback[1]($blnPublished, $this);
            }
        }

        // Update the database
        $this->Database->prepare("UPDATE tl_c4g_map_overlays SET tstamp=". time() .", published='" . ($blnPublished ? "" : 1) . "' WHERE id=?")
            ->execute($intId);
        $objVersions = new Versions('tl_c4g_map_overlays', $intId);
        $objVersions->initialize();
        C4GMapsAutomator::purgeBaselayerApiCache();
    }

}
