'use strict';

arikaim.component.onLoaded(function() {
    arikaim.ui.form.addRules("#login_form");  
    arikaim.ui.viewPasswordButton('.view-password','#password');
    
    arikaim.ui.button('#forgotten_button',function() {
        return arikaim.page.loadContent({
            id : 'content_box',
            component: 'current>users.reset-password'
        });
    });
    
    arikaim.ui.form.onSubmit('#login_form',function() {        
        return users.login();
    },function(result) {  
        arikaim.ui.hide('.message');

        if (result.action == 'load-confirm-email') {
            arikaim.page.loadContent({
                id : 'content_box',
                component: 'current>users.resend-confirm-email',
                params: {
                    uuid: result.uuid,
                    token: result.token
                }
            });
        } else {
            arikaim.loadUrl('admin');             
        }         
    },function(error) {
        console.log(error);
    });

   
});