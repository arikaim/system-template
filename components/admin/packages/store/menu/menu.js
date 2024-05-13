'use strict';

arikaim.component.onLoaded(function() {  
   
    arikaim.ui.button('.store-packages',function(button) {
        return arikaimStore.logout(function(result) {           
            arikaim.ui.loadComponent({
                mountTo: 'store_packages',
                component: 'system:admin.packages.store.view'
            });
        });
    }); 

    arikaim.ui.button('.store-logout',function(button) {
        return arikaimStore.logout(function(result) {           
            arikaim.ui.loadComponent({
                mountTo: 'tool_content',
                component: 'system:admin.packages.store'
            });
        });
    }); 
});