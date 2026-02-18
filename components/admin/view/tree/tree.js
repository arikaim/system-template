'use strict';

arikaim.component.onLoaded(function(component) {
    var tree;

    component.destroy = function() {           
    };

    component.init = function() {    
      HSAccordion.autoInit();
      HSTreeView.autoInit();
    };
    
    component.init();
 
    return component;
});
