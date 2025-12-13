'use strict';

arikaim.component.onLoaded(function() {    
    $('#install_page_toggle').on('change', function(event) {
        var checked = (event.currentTarget.checked == true) ? 1 : 0;     
        settings.disableInstallPage(checked);         
    }); 

    arikaim.ui.button('.repair-install',function(element) {
        return install.repair(function(result) {           
            arikaim.ui.form.showMessage({
                selector: '#message',               
                message: result.message
            });
        },function(error) {
            arikaim.ui.form.showMessage({
                selector: '#message',  
                class: 'error',
                removeClass: 'success',             
                message: error
            });
        });
    });
});
