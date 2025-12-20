'use strict';

arikaim.component.onLoaded(function() {  
    $('#modules_dropdown').on('change', function() {                     
        arikaim.page.loadContent({
            id: 'module_details',
            component: "system:admin.modules.module.details.tabs",
            params: { 
                module_name : $(this).val() 
            },
            useHeader: true
        });            
    }); 
});