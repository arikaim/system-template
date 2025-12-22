'use strict';

arikaim.component.onLoaded(function() {    
    $('#drivers_dropdown').on('change', function() {
        var name = $(this).val();            
        drivers.loadConfigForm(name,'driver_config');        
    });
});