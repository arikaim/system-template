'use strict';

arikaim.component.onLoaded(function() {    
    arikaim.ui.button('.update-button',function(element) {          
        var name = $(element).attr('name');

        return packages.install(name,'module',function(result) {                    
            arikaim.ui.form.showMessage(result.message);
        },function(error) {              
            arikaim.ui.form.showMessage({
                selector: '#message_' + name,
                message: error,
                class: 'error',
                removeClass: 'success'
            });
        });
    });
});