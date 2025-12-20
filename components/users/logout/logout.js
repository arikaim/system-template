'use strict';

arikaim.component.onLoaded(function() {    
    users.logout(function() {
        arikaim.clearToken();
        arikaim.page.reload();      
    });
});