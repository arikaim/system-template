'use strict';

arikaim.component.onLoaded(function() {    
    user.logout(function(result) {
        arikaim.clearToken();
        arikaim.page.reload();      
    });
});