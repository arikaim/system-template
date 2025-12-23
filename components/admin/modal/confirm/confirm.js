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

    component.open = function(onConfirm, onCancel) {            
        component.setVar('onConfirm',onConfirm);
        component.setVar('onCancel',onCancel);
        
        component.getModal().open(); 
    };

    component.init = function() {      
        var modalEl = $(component.getElement())[0];

        modal = new HSOverlay(modalEl);

        var closeButton = $(this.getElement()).find('.modal-cancel-button');
        var confirmButton = $(this.getElement()).find('.modal-confirm-button');

        $(closeButton).off();
        $(closeButton).on('click',function() {
            callFunction(component.getVar('onCancel'));
            component.close();
        });

        $(confirmButton).off();
        $(confirmButton).on('click',function() {
            callFunction(component.getVar('onConfirm'));
            component.close();
        });
    };

    component.init();

    return component;
});