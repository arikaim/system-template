/**
 *  Arikaim
 *  @version    1.0  
 *  @copyright  Copyright (c) Konstantin Atanasov <info@arikaim.com>
 *  @license    http://www.arikaim.com/license.html
 *  http://www.arikaim.com
 * 
 */

function MailerSettings() {

    var self = this;
    var form_id = '#mailer_settings_form';
    var component = arikaim.getComponent('system:admin.settings.mailer');

    this.saveTransportType = function(option_name,value) {
        settings.save(option_name,value,function(result) {
        });
    };

    this.sendTestEmail = function() {
        settings.saveAll(form_id,function(result) {
            arikaim.get('/core/api/mailer/test/email',function(result) {
                $('#send_button').removeClass('loading');
                $('#send_button').addClass('disabled');   
                var message = component.getProperty('messages.test');
                arikaim.form.showMessage({ 
                    element: '#send_msg',
                    msg: message, 
                    auto_hide: 1000 
                });     
            });
        });
    };

    this.init = function() {
        $('#send_button').off();
        $('#send_button').on('click',function() {
            $(this).addClass('loading');
            self.sendTestEmail();
        });
        $('#use_sendmail').off();
        $('#use_sendmail').checkbox({
            onChecked: function() {
                var option_name = $(this).attr('name');
                self.saveTransportType(option_name,true);
                arikaim.form.disable(form_id); 
                $('#test_email').hide();
                arikaim.form.clearErrors(form_id);
            },
            onUnchecked: function() {
                var option_name = $(this).attr('name');
                self.saveTransportType(option_name,false);
                arikaim.form.enable(form_id); 
                $('#test_email').show();
            }
        }); 
    
        var checked = $('#use_sendmail').checkbox('is checked');
        if (checked == true) {
            arikaim.form.disable(form_id);           
            $('#test_email').hide();
        }
        arikaim.form.addRules(form_id,{
            inline: false,
            fields: {
                user_name: {
                    rules: [{ type: 'minLength[2]' }]          
                },        
                password: {
                    rules: [{ type: 'minLength[2]' }]   
                },
                port: {
                    rules: [{ type: 'minLength[2]' }]   
                },
                host: {
                    rules: [{ type: 'minLength[5]' }]   
                }
            }
        });
        arikaim.form.onSubmit(form_id,function() {
            $('#save_button').addClass('disabled loading');
            self.save(form_id,function(result) {
                $('#save_button').removeClass('disabled loading');
            });
        });
    };

    this.save = function(form_id,onSuccess) {
        settings.saveAll(form_id,function(result) {
            var msg = component.getProperty('messages.save');  
            arikaim.form.showMessage({ msg: msg, auto_hide: 1000 });
            $(this).removeClass('disabled');   
            callFunction(onSuccess,result);     
        });
    };
}

var mailerSettings = new MailerSettings();

arikaim.page.onReady(function() {
    mailerSettings.init();
});