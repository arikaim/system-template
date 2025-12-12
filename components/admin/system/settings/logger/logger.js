'use strict';

arikaim.component.onLoaded(function() {  
    $('#logger_switch').on('change', function(event) {          
        $('#logger_type_settings').toggleClass('hidden');
    });
});