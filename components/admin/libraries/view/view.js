
arikaim.page.onReady(function() {
    arikaim.ui.button('.details-button',function(element) {
        var name = $(element).attr('library');      
        arikaim.ui.setActiveTab('#details_button');

        arikaim.page.loadContent({
            id: 'tab_content',
            component: 'system:admin.libraries.library.details',
            params: { library_name: name }
        },function(result) {           
            $('#library_details_tab .item').tab();           
        });   
    });
});