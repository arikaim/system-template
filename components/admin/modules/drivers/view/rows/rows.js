'use strict';

$(document).ready(function() {     
    safeCall('driversView',function(obj) {
        obj.initRows();
    },true);   
});