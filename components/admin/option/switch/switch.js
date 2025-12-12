'use strict';

arikaim.component.onLoaded(function(component) {
    $('.option-switch').on('change', function(event) {  
        var name = $(this).attr('name'); 
        var type = $(this).attr('option-type'); 
        var status = (event.currentTarget.checked == true) ? 1 : 0;              
        
        if (type == 'config') {
            options.saveConfigOption(name,status);
        } else {
            options.save(name,status);
        }
          
    });
});