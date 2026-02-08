'use strict';

arikaim.component.onLoaded(function(component) {
    var select;

    component.setValue = function(val) {
      select.setValue(val);
    };

    component.destroy = function() {
      console.log('des');
      select.destroy();
    };

    component.getValue = function() {  
      return select.getValue();
    };

    component.clear = function() {
      select.setValue('');

      var event = new Event('change');     
      select.el.dispatchEvent(event);      
    };

    component.addOption = function(items) {
      select.addOption(items);
    };

    component.removeOption = function(val) {
      select.removeOption(val);
    };

    component.reinit = function() {
      select.destroy();
      component.init();
    };

    component.init = function() {        
      var el = document.getElementById(component.getId());
      var clearButton = $('#' + component.getId() + '_clear_button');
      arikaim.ui.button(clearButton,function() {
        component.clear();
      });

      var selected = component.get('apiSelectedValues');
      var apiFieldsMap = el.getAttribute('apiFieldsMap');
      if (isEmpty(apiFieldsMap) == false) {
        apiFieldsMap = JSON.parse(apiFieldsMap);
      }
    
      select = new HSSelect(el);

      console.log(select);
    };
    
    component.init();

    console.log(component);
    
    return component;
});
