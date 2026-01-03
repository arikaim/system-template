'use strict';

arikaim.component.onLoaded(function(component) {

    component.init = function() {
        var items = $(component.getElement()).find('.tab-item');

        arikaim.ui.loadComponentButton(items,function(item) {       
            $(items).removeClass('active');
            $(item).addClass('active');
        });       
    };

    component.init();

    return component;
});