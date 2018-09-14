/**
 *  Arikaim
 *  @version    1.0  
 *  @copyright  Copyright (c) Konstantin Atanasov <info@arikaim.com>
 *  @license    http://www.arikaim.com/license.html
 *  http://www.arikaim.com
 * 
*/

function PasswordRecovery() {
    
    var self = this;
    var form_id = '#password_recovery_form';
    var component = arikaim.getComponent('system:admin.password-recovery');

    this.init = function() {
        arikaim.form.addRules(form_id,{
            inline: false,
            fields: {
                email: {
                    rules: [{ type: "email" }]
                }
            }
        });
    
        arikaim.form.onSubmit(form_id,function() {
            $('#revovery_button').addClass('disabled loading');
            self.send(function(result) {
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

    this.send = function(onSuccess,onError) {
        arikaim.post('/admin/api/user/password/recovery/',form_id,function(result) {
            callFunction(onSuccess,result);
        },function (errors) {   
            callFunction(onError,errors);  
        },"session");
    };
}

var recovery = new PasswordRecovery();

arikaim.page.onReady(function () {
    recovery.init();
});
