Views (Starboard & Portside)
============================

The contents displayed within the *Starboard* and *Portside*-elements (in the following called "*sideboards*") are defined by views. This document describes how they work and how they are created.



Sideboard structure
-------------------
![sideboard_sections](/docs/images/sideboard_sections.jpg?raw=true "Sideboard structure")
A Sideboard contains 5 sections: 

***titleBar:***
Normally contains the sideboard title and a close(x)-button.

***topToolbar:*** *optional*
Optional section for tool-buttons, options, etc...

***contentContainer:***
Contains the main content of a view.
Its height is calculated automatically and takes all the remaining space.

***bottomToolbar:*** *optional*
Optional section for tool-buttons, options, etc...
Mostly used for the "trigger-toolbar", to switch between views.

***statusBar:***
Can contain diverse additional information.
Tooltips used in the sideboard are displayed here, too. 



General process
---------------
Views can be activated by calling the `activate()`-function on them, which can be done manually, or by using their triggers (A button that activates them on click).

A view contains an internal list of section-element pairs. When activated, the view will replace the content of each of its listed sections, with the respective element. However, sections not listed internally will stay as they are, before that view was activated.
It will also deactivate an allready active view in its "viewScope", if existent.
Optionally a view can trigger custom functions when de-/activated or initialized.


>**Note:**
>Deactivating a view does not change the sections content! As long as a *Sideboard* is visible, views should only be deactivated by other views.



Adding a new view
-----------------------------------
To add a new view, the `addView()`-function of the according *Sideboard* must be called, which will then return a view-object, containing the `activate()` and `deactivate()` function. The function accepts a configuration-object and an optional viewScope, which is the whole *Sideboard* by default.


The call could look like this example:

    view = self.addView({
        name: 'viewName',
        triggerConfig: {
          label: 'triggerLabel',
          target: self.viewTriggerBar,
          tipLabel: c4g.maps.constant.i18n[NAME_CONST],
          className: c4g.maps.constant.css[NAME_CONST]
        },
        sectionElements: [
          {section: self.contentContainer, element: newContent},
          {section: self.bottomToolbar, element: self.viewTriggerBar}
        ],
        initFunction: function(){},
        activateFunction: function(){},
        deactivateFunction: function(){}
    }, opt_viewScope);


The configuration-object can contain following options:

**name:** The name of the view (*mandatory*)

**triggerConfig:** Another configuration-option for the trigger. The trigger will not be created, when this is not an object, but will be with default-config when this is an empty object.

**sectionElements:** An array of section-element pairs, defining which elements should be displayed on which sections when this view is activated.

**initFunction:** Will be executed when this view is activated, as long as this view is not "initialized". It is marked as "initialized", after an activation, if this function returns `true`, or is `undefined`.

**de-/activateFunction:** Will be called every time the view is de-/activated.



&nbsp;
---
<sub>&copy; by Küstenschmiede GmbH Software & Design</sub>
