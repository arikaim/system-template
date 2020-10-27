'use strict';

$(document).ready(function() {
    $('#logger_type_dropdown').dropdown({
        onChange: function(value, text, choice) {                 
            options.save('logger.handler',value);
        }
    });
});