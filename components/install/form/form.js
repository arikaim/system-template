'use strict';

$(document).ready(function() {
    install.initInstallForm();

    $('#main_progress').progress({
        duration : 600,
        total    : 4
    });

    $('#install_progress').progress({
        duration : 200,
        total    : 100
    });

    var submitButton = arikaim.ui.form.findSubmitButton('#install_form');

    arikaim.ui.form.onSubmit('#install_form',function(element) {                    
        $('#progress_content').show();
        $('#install_progress').progress('remove error');      

        return install.installCore('#install_form',
            function(result) {            
                $('#main_progress').progress('increment');
                $('#main_progress').progress('set label','Installing Modules');
                arikaim.ui.disableButton(submitButton);   

                $('#install_progress').progress('complete',true);
                install.installModules(
                    function(result) {      
                        $('#main_progress').progress('increment');
                        $('#main_progress').progress('set label','Installing Extensions');     
                        arikaim.ui.disableButton(submitButton);   

                        install.installExtensions(function(result) {
                            $('#main_progress').progress('increment');
                            $('#main_progress').progress('set label','Post install actions');      
                            arikaim.ui.disableButton(submitButton);   

                            install.postInstallActions(function(result) {
                                install.showComplete();
                            },function(error) {
                                install.showError(error);
                                arikaim.ui.enableButton(submitButton);   
                            });
                        });
                    },function(error) {
                        install.showError(error);
                        arikaim.ui.enableButton(submitButton);   
                    }
                );
            },
            function(error) {                     
                install.showError(error);
                arikaim.ui.enableButton(submitButton);   
            }
        );        
    });
});  