'use strict';

arikaim.component.onLoaded(function() {  
    $('#templates_dropdown').on('change', function() {
        var name = $(this).val();

        arikaim.page.loadContent({
            id: 'template_details',
            component: "system:admin.templates.template.details.tabs",
            params: { template_name : name },
            useHeader: true
        },function(result) {
            console.log(result);
        });            
    });   
});