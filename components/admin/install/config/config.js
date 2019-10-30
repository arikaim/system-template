/**
 *  Arikaim
 *  @copyright  Copyright (c) Konstantin Atanasov <info@arikaim.com>
 *  @license    http://www.arikaim.com/license
 *  http://www.arikaim.com
 */

$(document).ready(function() {
    arikaim.ui.form.addRules("#config_form",{
        inline: false,
        fields: {
            database: {
                rules: [{ type: "minLength[3]" }]
            },
            username: {
                rules: [{ type: "minLength[3]" }]
            },
            password: {
                rules: [{ type: "minLength[3]" }]
            }
        }
    });

    arikaim.ui.form.onSubmit('#install_form',function(element) {      
        arikaim.ui.form.disable('#install_form');
        progressBar.start({
            onComplete: function() {  
                if (install.status == true) {
                    // installed
                    $('#continue_button').show();
                    $('#install_button').hide();     
                    progressBar.hide(true);  
                    arikaim.ui.show('#done_message');                
                } else {
                    // not yet installed or error 
                    $('#continue_button').hide();
                    $('#install_button').show();
                }
            }
        });
        return install.install('#install_form');
    }).done(function() {
        arikaim.ui.hide('#install_button',true);      
        install.status = true;
    }).fail(function() {
        arikaim.ui.form.disable('#install_form');
        progressBar.reset();
        progressBar.hide(true);
        $('#continue_button').hide();
        $('#install_button').show();
        install.status = false;
    });
});  