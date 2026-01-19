'use strict';

arikaim.component.onLoaded(function(component) {
    var select;

    component.init = function() {        
      var el = document.getElementById(component.getId());
      select = new HSSelect(el,{
        optionTemplate: component.get('optionTemplate'),
        searchPlaceholder: component.get('searchPlaceholder'),
        placeholder: component.get('placeholder'),
        hasSearch: component.get('hasSearch'),
        apiDataPart: component.get('apiDataPart'),
        apiIconTag: component.get('apiIconTag'),
        apiQuery: component.get('apiQuery')
      });

      console.log(component.get('optionTemplate'));


      console.log(select);
    };
   
    component.init();

    return component;
});