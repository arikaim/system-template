'use strict';

arikaim.component.onLoaded(function() {    
    $('.popup').popup();
    
    $('#language_dropdown').dropdown({
        onChange: function(value) {               
            arikaim.setLanguage(value);
        }
    });
});