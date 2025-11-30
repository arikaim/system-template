'use strict';

arikaim.component.onLoaded(function(component) { 

    component.search = function() {
        var searchField = $(component.getElement()).find('.search-field');
        var fields = {};
        fields[component.get('field')] = searchField.val().trim();
           
        search.setSearch({
            search: fields
        },component.get('namespace'),function(result) {
            component.set('action','search');
        });
    };

    component.init = function() {   
        var searchField = $(component.getElement()).find('.search-field');

        $(searchField).off();
        $(searchField).on("keydown",function search(event) {
            if (event.keyCode == 13) {
                component.search();
            }
        });

        arikaim.ui.button($(component.getElement()).find('.search-button'),function(button) {
            component.search();
        });       
    };

    component.init();
    
    return component;
});