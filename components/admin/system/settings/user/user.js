'use strict';

arikaim.page.onReady(function() {
    arikaim.ui.form.addRules("#user_settings_form");

    arikaim.ui.form.onSubmit('#user_settings_form',function() {
        return arikaim.post('/core/api/user/update','#user_settings_form');
    },function(result) {       
        arikaim.ui.form.showMessage(result.message);       
    }); 
});