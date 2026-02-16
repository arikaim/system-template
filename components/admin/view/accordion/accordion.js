'use strict';

arikaim.component.onLoaded(function(component) {
    var accordion;

    component.destroy = function() {      
    };

    component.init = function() {  
        HSAccordion.autoInit();
    };
    
    component.init();
 
    return component;
});
