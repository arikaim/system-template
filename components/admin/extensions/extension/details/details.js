'use strict';

arikaim.component.onLoaded(function() {  
    $('#extensions_dropdown').on('change', function() {
        arikaim.page.loadContent({
            id: 'extension_details',
            component: "system:admin.extensions.extension.details.tabs",
            params: { 
                extension_name : $(this).val() 
            },
            useHeader: true
        });            
    });   
});