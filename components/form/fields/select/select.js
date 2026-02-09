'use strict';

arikaim.component.onLoaded(function(component) {
    var select;

    component.setValue = function(val) {
      select.setValue(val);
    };

    component.destroy = function() {      
      select.destroy();
    };

    component.getValue = function() {  
      return select.value;
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
    
      select = new HSSelect(el,{       
        apiUrl: component.get('apiUrl'),
        apiFieldsMap: apiFieldsMap,
        optionTemplate: component.get('optionTemplate'),
        searchPlaceholder: component.get('searchPlaceholder'),
        searchClasses: component.get('searchClasses'),
        placeholder: component.get('placeholder'),
        hasSearch: component.get('hasSearch'),
        apiDataPart: component.get('apiDataPart'),
        apiIconTag: component.get('apiIconTag'),
        apiQuery: component.get('apiQuery'),
        apiSearchQueryKey: component.get('apiSearchQueryKey'),
        toggleClasses: component.get('toggleClasses'),
        dropdownClasses: component.get('dropdownClasses'),
        optionClasses: component.get('optionClasses'),
        extraMarkup: component.get('extraMarkup'),
        isSearchDirectMatch: component.get('isSearchDirectMatch'),
        toggleTag: component.get('toggleTag'),
        apiSelectedValues: [selected]
      });
    };
    
    component.init();
 
    return component;
});
