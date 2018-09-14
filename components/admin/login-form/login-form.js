/**
 *  Arikaim
 *  @version    1.0  
 *  @copyright  Copyright (c) Konstantin Atanasov <info@arikaim.com>
 *  @license    http://www.arikaim.com/license.html
 *  http://www.arikaim.com
 * 
 */

arikaim.page.onReady(function () {

    arikaim.form.addRules("#login_form",{
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
    
    $('#forgotten_button').off();
    $('#forgotten_button').on('click',function() {
        arikaim.page.loadContent({
            id : 'login_box',
            component: 'system:admin.password-recovery'
        });
    });
    
    arikaim.form.onSubmit('#login_form',function() {
        $('.login-button').addClass('disabled loading');
        controlPanelUser.login(function(result) {
            $('.login-button').removeClass('disabled loading');
        },function(errors) {
            $('.login-button').removeClass('disabled loading');
            arikaim.form.showErrors(errors,'.form-errors');
            arikaim.form.addFieldErrors('#login_form',errors);
        });
    });
});