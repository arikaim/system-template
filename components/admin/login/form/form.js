/**
 *  Arikaim
 *  @version    1.0  
 *  @copyright  Copyright (c) Konstantin Atanasov <info@arikaim.com>
 *  @license    http://www.arikaim.com/license.html
 *  http://www.arikaim.com
 * 
 */

arikaim.page.onReady(function () {
    arikaim.ui.viewPasswordButton('.view-password','#password');
    
    arikaim.ui.form.addRules("#login_form",{
        inline: false,
        fields: {
            password: {
                rules: [{ type: "empty" }]
            },
            user_name: {
                rules: [{ type: "empty" }]
            }
        }
    });
    
    $('#forgotten_button').on('click',function() {
        arikaim.page.loadContent({
            id : 'login_box',
            component: 'system:admin.password-recovery'
        });
    });
    
    arikaim.ui.form.onSubmit('#login_form',function() {
        return user.login('#login_form',function(result) {
            arikaim.page.showLoader('#content');
            arikaim.page.reload();   
        });
    }).done(function() {

    });
});