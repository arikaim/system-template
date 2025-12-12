'use strict';

arikaim.component.onLoaded(function() {
    $('.checkbox-field').on('change', function(event) {      
        var fieldId = $(this).attr('data-field-id'); 

        if (event.currentTarget.checked == true) {           
            $('#' + fieldId).val(1);
        } else {           
            $('#' + fieldId).val(0);
        }
    });
});