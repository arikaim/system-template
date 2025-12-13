'use strict';

arikaim.component.onLoaded(function() {    
    $('#logger_type_dropdown').on('change', function() {                      
        options.saveConfigOption('settings/loggerHandler',$(this).val());           
    });
});