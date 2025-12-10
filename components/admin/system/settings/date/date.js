'use strict';

arikaim.component.onLoaded(function() {    
    $('#time_zone').on('change',function() {
        var selected = $(this).val();      
        options.saveConfigOption('settings/timeZone',selected);                  
    });

    $('#date_format').on('change',function() {
        var selected = $(this).val();      
        options.saveConfigOption('settings/dateFormat',selected);                  
    });

    $('#time_format').on('change',function() {
        var selected = $(this).val();      
        options.saveConfigOption('settings/timeFormat',selected);                  
    }); 
});