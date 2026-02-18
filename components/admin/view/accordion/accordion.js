'use strict';

arikaim.component.onLoaded(function(component) {
   
    component.destroy = function() {      
    };

    component.init = function() {  
        HSAccordion.autoInit();
    };
    
    component.init();
 
    return component;
});
