'use strict';

arikaim.component.onLoaded(function() {  
    $('#libraries_dropdown').on('change', function() {
        var name = $(this).val();
        componentsLibraryView.loadDetails(name,'component_library_details');
    });   
});