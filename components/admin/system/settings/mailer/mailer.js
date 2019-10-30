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
                element: '#send_msg',
                message: result.message                  
            });     
        },function(errors) {               
           arikaim.ui.form.showErrors(errors);
        });
    };
}

var mailerSettings = new MailerSettings();
