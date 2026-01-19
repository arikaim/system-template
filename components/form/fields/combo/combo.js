'use strict';

arikaim.component.onLoaded(function(component) {
    
    component.init = function() {   
      //  var field = $(component.getElement()).find('.checkbox-field')[0];
       // var dataField = $(component.getElement()).find('.checkbox-data-field')[0];
        
        console.log( component.getId() );
        var el = document.getElementById(component.getId());
        console.log( el );

      //  var items = Array.from(el.querySelectorAll('[data-combo-box-output-item]'))
      //  console.log(items);
        var combo;

      try {
           
             //     HSComboBox.autoInit(el);
         combo  = new HSComboBox(el);
      } catch (error) {
        
      }
     
      //  // autoInit();

        //var combo = HSComboBox.getInstance('#' + component.getId(), true);


       // var combo = new HSComboBox(el);

        
        console.log(combo);

    };
   
    component.init();

    return component;
});