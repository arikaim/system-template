"use strict";

$(document).ready(function() {
    install.init();
    install.initInstallForm();

    arikaim.ui.form.onSubmit('#install_form',function(element) {              
        progressBar.start({
            interval: 270,
            onComplete: function() {  
                if (install.status == true) {
                    // installed
                    $('#continue_button').show();
                    $('.submit-button').hide();     
                    progressBar.hide(true);               
                } else {
                    // not yet installed or error 
                    $('#continue_button').hide();
                    $('.submit-button').show();
                }
            }
        });
        return install.install('#install_form');
        
    },function(result) {
        arikaim.ui.form.disable('#install_form');
        $('.submit-button').addClass('disabled');    
        $('#continue_button').hide();

        install.installExtensions(function(result) {          
            progressBar.reset();
            progressBar.hide(true);
            $('.submit-button').hide();      
            arikaim.ui.form.showMessage({
                selector: '#message',
                hide: 0,
                message: result.message
            });
            arikaim.ui.form.disable('#install_form');
            $('#continue').removeClass('hidden');
            $('#continue').show();
            $('#continue_button').show();
            install.status = true;
        },function(error) {
            progressBar.reset();
            progressBar.hide(true);
            $('#continue_button').hide();
            $('.submit-button').show();
            install.status = false;
        });
    },function(error) {
        progressBar.reset();
        progressBar.hide(true);
        $('#continue_button').hide();
        $('.submit-button').show();
        install.status = false;
    });
});  