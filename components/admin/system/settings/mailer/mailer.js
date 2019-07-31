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

    this.sendTestEmail = function() {
        return arikaim.get('/core/api/mailer/test/email',function(result) {    
            var component = arikaim.component.get('system:admin.settings.mailer');                        
            var message = component.getProperty('messages.test');
            arikaim.ui.form.showMessage({ 
                element: '#send_msg',
                message: message                  
            });     
        },function(errors) {               
           arikaim.ui.form.showErrors(errors);
        });
    };

    this.init = function() {

        arikaim.ui.button('#send_button',function() {
            return self.sendTestEmail();
        });
        $('#use_ssl').checkbox({});
        $('#use_sendmail').checkbox({
            onChecked: function() {
                var option_name = $(this).attr('name');
                options.save(option_name,true);
                arikaim.ui.hide('#smtp_setings_form');                
            },
            onUnchecked: function() {
                var option_name = $(this).attr('name');
                options.save(option_name,false);
                arikaim.ui.show('#smtp_setings_form');                
            }
        }); 
         
        arikaim.ui.form.addRules(form_id,{
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
    
        arikaim.ui.form.onSubmit(form_id,function(data) {         
            return options.saveAll(form_id);
        }).done(function() {
            var component = arikaim.component.get('system:admin.settings.mailer');   
            var message = component.getProperty('messages.save');
            arikaim.ui.form.showMessage(message);    
        });
    };
}

var mailerSettings = new MailerSettings();

$(document).ready(function() {
    mailerSettings.init();
});