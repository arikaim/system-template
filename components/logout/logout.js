"use strict";

arikaim.page.onReady(function() {
    user.logout(function(result) {
        arikaim.clearToken();
        arikaim.page.reload();      
    });
});