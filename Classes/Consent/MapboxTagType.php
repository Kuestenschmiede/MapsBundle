<?php

declare(strict_types=1);

namespace con4gis\MapsBundle\Classes\Consent;

use Hofff\Contao\Consent\Bridge\ConsentId;
use Hofff\Contao\Consent\Core\ConsentId\ExternalConsentId;
use Hofff\Contao\Consent\Core\Model\TagModel;
use Hofff\Contao\Consent\Core\Tag\AbstractCustomizableServiceTagType;

final class MapboxTagType extends AbstractCustomizableServiceTagType
{
    /** @var bool */
    protected static $supportsPlaceholder = true;

    public function name() : string
    {
        return 'mapbox';
    }

    public function category() : string
    {
        return 'external';
    }

    public function createTagId(TagModel $tagModel) : ConsentId
    {
        return new ExternalConsentId('mapbox');
    }
}
