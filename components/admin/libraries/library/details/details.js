'use strict';

arikaim.component.onLoaded(function() {  
    $('#libraries_dropdown').on('change', function() {            
        arikaim.page.loadContent({
            id: 'library_details',
            component: "system:admin.libraries.library.details.tabs",
            params: { 
                library_name : $(this).val()
            },
            useHeader: true
        },function() {
                    
        });     
    });   
});