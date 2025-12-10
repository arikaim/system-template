'use strict';

arikaim.component.onLoaded(function() { 
    $('#number_format').on('change',function() {
        var selected = $(this).val();      
        options.saveConfigOption('settings/numberFormat',selected);                  
    });
});