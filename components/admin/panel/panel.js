'use strict';

arikaim.component.onLoaded(function(component) {

    component.init = function() {
        arikaim.ui.button($(component.getElement()).find('.panel-close-button'),function(element) {  
            $(component.getElement()).removeClass('opacity-100');
            $(component.getElement()).addClass('opacity-0');
            setTimeout(function() {
                $(component.getElement()).remove();  
            },500); 

            component.set('status','close');

            arikaim.events.emit('panel.close',{
                type: component.get('type'),
                uuid: component.get('uuid')
            });                  
        });

        setTimeout(function() {
            $(component.getElement()).addClass('opacity-100');
        },50);       
    };
    
    component.init();

    return component;
});