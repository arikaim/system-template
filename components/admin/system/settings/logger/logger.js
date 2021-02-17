'use strict';

arikaim.component.onLoaded(function() {  
    $('.change-option').checkbox({
        onChecked: function() {
            var optionName = $(this).attr('name');
            options.save(optionName,true);
            $('#logger_type_settings').show();
        },
        onUnchecked: function() {
            var optionName = $(this).attr('name');
            options.save(optionName,false);
            $('#logger_type_settings').hide();
        }
    });        
});