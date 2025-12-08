'use strict';

arikaim.component.onLoaded(function(component) {

    component.init = function() {
        arikaim.ui.button($(component.getElement()).find('.panel-close-button'),function(element) {     
            $(component.getElement()).remove();  
            component.set('status','close');

            arikaim.events.emit('panel.close',{
                type: component.get('type'),
                uuid: component.get('uuid')
            });   
        });
    };
    
    component.init();

    return component;
});