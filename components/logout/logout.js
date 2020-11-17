'use strict';

$(document).ready(function() {
    user.logout(function(result) {
        arikaim.clearToken();
        arikaim.page.reload();      
    });
});