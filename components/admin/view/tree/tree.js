'use strict';

arikaim.component.onLoaded(function(component) {
    var tree;

    component.destroy = function() {  
      tree.destroy();         
    };

    component.onItemClick = function(callback) {     
      tree.on('click', callback);
    };

    component.init = function() {    
      HSAccordion.autoInit();
   
      var el = component.getElement();
      tree = new HSTreeView(el);
    };
    
    component.init();
 
    return component;
});
