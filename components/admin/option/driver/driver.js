'use strict';

arikaim.component.onLoaded(function(component) {
    $('#drivers_dropdown').on('change', function() {
        var val = $(this).val();
        var optionName = $('#driver_field').attr('option-name');                  
        
        options.save(optionName,val);
    });
});
