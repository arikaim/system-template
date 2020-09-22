"use strict";

arikaim.page.onReady(function() {
    $('#modules_dropdown').dropdown({
        onChange: function(name) {              
            arikaim.page.loadContent({
                id: 'module_details',
                component: "system:admin.modules.module.details.tabs",
                params: { module_name : name },
                useHeader: true
            });     
        }
    }); 
});