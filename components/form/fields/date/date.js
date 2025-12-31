'use strict';

arikaim.component.onLoaded(function(component) {

    component.getTimestamp = function() {
        return (component.getVar('datepicker').getDate().getTime() / 1000);
    }

    component.getDatepicker = function() {
        return component.getVar('datepicker');
    }

    component.init = function() {
        var datepicker = new flatpickr('#' + component.getId(),{
            defaultDate: component.get('value'),
            dateFormat: component.get('date-format')
        });

        var value = $(component.getElement()).val().trim();
        if (isEmpty(value) == false) {
            datepicker.setDate(value)
        }

        component.setVar('datepicker',datepicker);
    };

    component.init();

    return component;
});
