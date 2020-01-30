/**
 *  Arikaim
 *  @copyright  Copyright (c) Konstantin Atanasov <info@arikaim.com>
 *  @license    http://www.arikaim.com/license
 *  http://www.arikaim.com
 */

function MailerSettings() {
    var self = this;
  
    this.sendTestEmail = function() {
        return arikaim.get('/core/api/mailer/test/email',function(result) {              
            arikaim.ui.form.showMessage({ 
                selector: '#send_msg',
                message: result.message                  
            });     
        },function(errors) {               
           arikaim.ui.form.showErrors(errors);
        });
    };

    this.initSettingsForm = function(useSmtp) {
        if (useSmtp == true) {
            arikaim.ui.form.addRules('#mailer_settings_form',{
                inline: false,
                fields: {
                    user_name: {
                        identifier: 'user_name',
                        rules: [{ type: 'minLength[2]' }]          
                    },        
                    password: {
                        identifier: 'password',
                        rules: [{ type: 'minLength[2]' }]   
                    },
                    port: {
                        identifier: "port",
                        rules: [{ type: 'minLength[2]' }]   
                    },
                    host: {
                        identifier: 'host',
                        rules: [{ type: 'empty' }]   
                    }
                }
            });
        } else {
            arikaim.ui.form.addRules('#mailer_settings_form',{
                inline: false,
                fields: {}
            });
        }
    };
}

var mailerSettings = new MailerSettings();
