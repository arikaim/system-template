'use strict';

arikaim.component.onLoaded(function(component) {
    var tree;

    component.destroy = function() {           
    };

  
    component.init = function() {    
      HSAccordion.autoInit();
      HSTreeView.autoInit();

     // var el = document.getElementById(component.getId());
//
     // console.log(el);

     // tree = new HSTreeView(el);

     // console.log(tree);
    };
    
    component.init();
 
    return component;
});
