'use strict';

arikaim.component.onLoaded(function() {    
    $('#language_dropdown').dropdown({
        onChange: function(value) {               
            arikaim.setLanguage(value);
        }
    });
});