'use strict';

arikaim.component.onLoaded(function() {  
    $('#user_menu_dropdown').dropdown({
        onChange: function(value) {              
            arikaim.page.loadContent({
                id: 'tool_content',
                component: value
            });
        }
    });
});
