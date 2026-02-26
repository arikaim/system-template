'use strict';

arikaim.component.onLoaded(function(component) { 
    var modal;

    component.getModal = function() {
        return modal;
    }

    component.close = function() {             
        component.getModal().close(); 
    };

    component.setContent = function(content) {
        $(this.getElement()).find('.modal-body').html(content);
    };

    component.getContentElement = function() {
        return $(this.getElement()).find('.modal-body');
    };

    component.setTitle = function(title) {
        $(this.getElement()).find('.modal-title').html(title);
    };

    component.open = function(options) {        
        if (isEmpty(options['title']) == false) {
            component.setTitle(options['title']);
        }     
        if (isEmpty(options['content']) == false) {
            component.setContent(options['content']);
        } 

        if (isEmpty(options['component']) == false) {
            component.loadContent({
                component: options['component']['name'],
                params: options['component']['params']
            })
        }
        
        component.getModal().open(); 
    };

    component.loadContent = function(options) {
        arikaim.ui.loadComponent({
            mountTo: component.getContentElement(),
            component: options.component,
            params: options.params
        });
    };

    component.init = function() {      
        var modalEl = $(component.getElement())[0];

        modal = new HSOverlay(modalEl);

        var closeButton = $(this.getElement()).find('.modal-close-button');
        
        $(closeButton).off();
        $(closeButton).on('click',function() {           
            component.close();
        });
    };

    component.init();

    return component;
});