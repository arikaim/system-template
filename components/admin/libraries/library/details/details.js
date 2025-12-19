'use strict';

arikaim.component.onLoaded(function() {  
    $('#libraries_dropdown').dropdown({
        onChange: function(name) {              
            arikaim.page.loadContent({
                id: 'library_details',
                component: "system:admin.libraries.library.details.tabs",
                params: { library_name : name },
                useHeader: true
            },function() {
                        
            });     
        }
    });   
});