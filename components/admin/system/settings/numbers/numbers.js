'use strict';

arikaim.component.onLoaded(function() {  
    $('#number_format').dropdown({
        onChange: function(value) {          
            options.save('number.format',value);
        }
    });
});