"use strict";

$(document).ready(function() { 
    safeCall('relationsView',function(obj) {
        obj.initRows();
    },true);      
}); 