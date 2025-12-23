'use strict';

arikaim.component.onLoaded(function() {    

    arikaim.ui.button('.update-composer-package',function(element) {          
        var name = $(element).attr('package-name');

        return packages.install(name,'composer',function(result) {                    
            ariaim.ui.getComponent('toast').show(result.message);            
        },function(error) {           
            ariaim.ui.getComponent('toast').show(error);              
        });
    });
});