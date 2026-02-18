'use strict';

arikaim.component.onLoaded(function(component) {
    var dropdown;

    component.init = function() {
        var el = component.getElement();
        dropdown = new HSDropdown(el);
        
        var items = $(el).find('.user-menu-item');

        arikaim.ui.loadComponentButton(items);  
    }

    component.init();

    return component;
});