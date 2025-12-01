'use strict';

arikaim.component.onLoaded(function(component) {
    
    component.getCloseButtons = function() {
        return $(component.getElement()).find('.toast-close-button');
    };

    component.hide = function() {
        var fade = component.get('fade');
        fade = parseInt((isEmpty(fade) == true) ? 0 : fade);

        $(component.getElement()).fadeOut(fade);       
    };

    component.show = function(message) {
        if (isEmpty(message) == false) {
            component.setContent(message);
        }
        var fade = component.get('fade');
        fade = parseInt((isEmpty(fade) == true) ? 0 : fade);

        var hideAfter = component.get('hide-after');
        hideAfter = parseInt((isEmpty(hideAfter) == true) ? 0 : hideAfter);
       
        $(component.getElement()).fadeIn(fade);   
        if (hideAfter > 0) {
            $(component.getElement()).delay(hideAfter).fadeOut(fade);
        }      
    };

    component.setContent = function(text) {      
        var toastContent = $(component.getElement()).find('.toast-content');
        $(toastContent).html(text)
    };

    component.init = function() {
        var buttons = component.getCloseButtons();
        
        if (isEmpty(buttons) == false) {
            $(buttons).off();
            $(buttons).on('click',function() {
                component.hide();
            });
        }
    };

    // init
    component.init();

    return component;
});
