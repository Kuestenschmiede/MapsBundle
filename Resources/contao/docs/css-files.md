CSS-Files
=========

**NOTE:** While the theme-machanism is still under development, the theme-specific css-files may just have a general name. This will be fixed once the machanism is fully implemented. 

**c4g-maps-general.css:**
  >The minimum of css-rules for maps in order to work properly.
  >E.g.: size and position

**themes/**
  > css-files in here are optional and are used to apply different theme-looks.
  > They are split into four groups:
  > 
  >- **buttons (may be renamed to "style", "appearance", or similar):**
  > > *Naming convention: c4g-theme-buttons-**stylename**.css* 
  > > Handles the shape of the control-elements that are on the map.
  > > (e.g.: buttons, scaleline, portside-containers, etc)
  >- **colors:**
  > > *Naming convention: c4g-theme-colors-**colorsetname**.css* 
  > > Color-specific rules.
  >- **effects:**
  > > *Naming convention: c4g-theme-effects-**effectname**.css* 
  > > Contains css-effects, as transition, or keyframe-animations.
  >- **icons:**
  > > *Naming convention: c4g-theme-icons-**iconsetname**.css* 
  > > Icon definitions of the c4g-maps interface are placed here.

&nbsp;
---
<sub>&copy; by Küstenschmiede GmbH Software & Design</sub>