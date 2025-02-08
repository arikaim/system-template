'use strict';

arikaim.component.onLoaded(function() {  
    arikaim.ui.viewPasswordButton('.view-password','#password');
    arikaim.ui.form.addRules("#store_login_form");

    arikaim.ui.form.onSubmit('#store_login_form',function() {
        arikaim.ui.form.disable('#store_login_form');
        arikaim.ui.disableButton('.login-button');
        
        return arikaimStore.login('#store_login_form',function(result) {   
            arikaim.ui.form.disable('#store_login_form');     
            
            arikaim.ui.loadComponent({
                mountTo: 'tool_content',
                component: 'system:admin.packages.store'
            });

        },function(error) {
            arikaim.ui.form.enable('#store_login_form');
            arikaim.ui.enableButton('.login-button');
        });
    });
});