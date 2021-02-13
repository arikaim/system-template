/**
 *  Arikaim
 *  @copyright  Copyright (c) Konstantin Atanasov <info@arikaim.com>
 *  @license    http://www.arikaim.com/license
 *  http://www.arikaim.com
 */
'use strict';

function MailerSettings() {
   
    this.init = function() {
        $('#drivers_dropdown').dropdown({
            onChange: function(value) {                    
                options.save('mailer.driver',value);
            }
        });

        arikaim.ui.button('.mailer-settings-button',function() {
            return arikaim.page.loadContent({
                id: 'mailer_config',
                component: 'system:admin.system.settings.mailer.settings',  
            });
        });

        arikaim.events.on('driver.config',function(element,name,category) {      
            drivers.loadConfig(name,'mailer_config',null,'sixteen wide');
        },'driversList',self)

        arikaim.ui.button('#send_button',function() {
            return mailerSettings.sendTestEmail();
        });
    };

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
}

var mailerSettings = new MailerSettings();

$(document).ready(function () {
    mailerSettings.init();
});