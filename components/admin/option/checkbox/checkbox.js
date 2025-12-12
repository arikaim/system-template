'use strict';

arikaim.component.onLoaded(function(component) {
    $('.option-checkbox').on('change', function(event) {  
        var name = $(this).attr('name'); 
        var status = (event.currentTarget.checked == true) ? 1 : 0;              
        
        options.save(name,status);
    });
});