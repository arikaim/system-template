'use strict';

arikaim.component.onLoaded(function(component) {
    var combo;

    component.setValue = function(val) {
     
    };

    component.destroy = function() {
   
    };

    component.getValue = function() {  
   
    };

    component.clear = function() {
      

      var event = new Event('change');     
    
    };

    component.addOption = function(items) {
     
    };

    component.removeOption = function(val) {
     
    };

    component.reinit = function() {
      
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
    
      combo = new HSComboBox(el,{       
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
