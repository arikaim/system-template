"use strict";

$(document).ready(function() {
    install.init();
    install.initInstallForm();

    arikaim.ui.form.onSubmit('#install_form',function(element) {              
        progressBar.start({
            interval: 300            
        });
        progressBar.setLabel($('#core_label').attr('label'));
        
        return install.install('#install_form');
        
    },function(result) {
        install.step = 2;
        arikaim.ui.form.disable('#install_form');
        $('.install-button').addClass('disabled');    
        $('#continue_button').hide();
        progressBar.setLabel($('#modules_label').attr('label'));
      
        install.installModules(function(result) {    
            install.step = 3;
            progressBar.setLabel($('#extensions_label').attr('label'));
            install.installExtensions(function(result) {    
                progressBar.setLabel($('#post_label').attr('label'));
    
                $('#progress').progress('set label',);
                install.step = 4;
                install.postInstallActions(function(result) {
                    install.showComplete(result.complete);
                },function(error) {
                    install.showError(error);
                })  
               
            },function(error) {
                install.showError(error);
            });
        });
      
    },function(error) {
      
        install.showError(error);
    });
});  