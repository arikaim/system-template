'use strict';

arikaim.component.onLoaded(function() {
    $('#languages_list').on('change', function() {
        var selected = $(this).val();
        var option = $(this).find('option:selected');
    
        arikaim.ui.form.clearErrors('#language_form');
 
        $('#code').val(selected);
        $('#code_3').val($(option).attr('full-code'));
        $('#title').val($(option).attr('data-title'));
        $('#native_title').val($(option).attr('native-title'));      
    });  
    
    arikaim.ui.form.onSubmit('#language_form',function() {         
        return arikaim.post('/core/api/language/add','#language_form');
    },function(result) {      
        languagesView.addItem({
            uuid: result.uuid
        });

        arikaim.ui.form.showMessage(result.message);
        arikaim.ui.form.clear('#language_form');
    });
});