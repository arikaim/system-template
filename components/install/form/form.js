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
                    $('.install-button').hide();     
                    progressBar.hide(true);               
                } else {
                    // not yet installed or error 
                    $('#continue_button').hide();
                    $('.install-button').show();
                }
            }
        });
        $('#progress').progress('set label','Installing Core');
        
        return install.install('#install_form');
        
    },function(result) {
        arikaim.ui.form.disable('#install_form');
        $('.install-button').addClass('disabled');    
        $('#continue_button').hide();
        $('#progress').progress('set label','Installing Extensions');

        install.installExtensions(function(result) {    
            $('#progress').progress('set label','Executing post install actions');

            install.postInstallActions(function(result) {
                progressBar.reset();
                progressBar.hide(true);
                $('.install-button').hide();      
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
                install.showError(error);
            })  
           
        },function(error) {
            install.showError(error);
        });
    },function(error) {
        install.showError(error);
    });
});  