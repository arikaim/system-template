'use strict';

arikaim.component.onLoaded(function(component) {
    
    component.init = function() {   
        var field = $(component.getElement()).find('.checkbox-field')[0];
        var dataField = $(component.getElement()).find('.checkbox-data-field')[0];

        $(field).on('change', function(event) {      
            var checked = (event.currentTarget.checked == true) ? 1 : 0;
            $(dataField).val(checked);  
        });
    };
   
    component.init();

    return component;
});