/**
 *  Arikaim
 *  @version    1.0  
 *  @copyright  Copyright (c) Konstantin Atanasov <info@arikaim.com>
 *  @license    http://www.arikaim.com/license.html
 *  http://www.arikaim.com
 * 
*/

function ChangePassword() {
    
    var self = this;
    var form_id = '#change_password_form';
    var component = arikaim.getComponent('system:admin.change-password');

    this.init = function() {
        arikaim.form.addRules(form_id,{
            inline: false,
            fields: {
                password: {
                    rules: [{ type: "email" }]
                },
                repeat_password: {
                    rules: [{ type: "email" }]
                }
            }
        });
    
        arikaim.form.onSubmit(form_id,function() {
            $('#revovery_button').addClass('disabled loading');
            self.change(function(result) {
                self.showDoneMessage();
            },function(errors) {
                $('#revovery_button').removeClass('disabled loading');
                arikaim.form.showErrors(errors,'.form-errors');
                arikaim.form.addFieldErrors(form_id,errors);
            });
        });
    
        $('.open-login-page').off(); 
        $('.open-login-page').on('click',function() {
            arikaim.page.loadContent({
                id : 'login_box',
                component: 'system:admin.login-form'
            });
        });
    };

    this.showDoneMessage = function() {
        var send_email_message = component.getProperty('messages.email');

        $('#revovery_button').removeClass('disabled loading');
        $('#revovery_button').hide();
        $('#password_recovery_form').hide();
        arikaim.page.show('#login_page_button');
        var email = $('#email').val()
        send_email_message += "<b>" + email + "</b>"; 
        arikaim.form.showMessage({ msg: send_email_message});
    };

    this.change = function(onSuccess,onError) {
        arikaim.post('/core/api/user/password/change/',form_id,function(result) {
            callFunction(onSuccess,result);
        },function (errors) {   
            callFunction(onError,errors);  
        },"session");
    };
}

var chnagePassword = new ChangePassword();

arikaim.page.onReady(function () {
    chnagePassword.init();
});
