"use strict";

$(document).ready(function() {
    install.init();
    install.initInstallForm();

    arikaim.ui.form.onSubmit('#install_form',function(element) {              
        progressBar.start({
            interval: 270            
        });
        progressBar.setLabel($('#core_label').attr('label'));
        
        return install.install('#install_form');
        
    },function(result) {
        install.step = 2;
        arikaim.ui.form.disable('#install_form');
        $('.install-button').addClass('disabled');    
        $('#continue_button').hide();
        progressBar.setLabel($('#extensions_label').attr('label'));
      
        install.installExtensions(function(result) {    
            progressBar.setLabel($('#post_label').attr('label'));

            $('#progress').progress('set label',);
            install.step = 3;
            install.postInstallActions(function(result) {
                install.showComplete(result.complete);
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