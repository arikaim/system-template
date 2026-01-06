'use strict';

arikaim.component.onLoaded(function(component) {
    
    component.init = function() {
        var button = $(component.getElement()).find('.view-password')[0];
        var field = $(component.getElement()).find('.password-field')[0];
         
        arikaim.ui.button(button,function(element) {           
            $(field).attr('type',function(index, attr) {
                return (attr == 'text') ? 'password' : 'text';
            });
        });
    };

    component.init();

    return component;
});
