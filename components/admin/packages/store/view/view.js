$(document).ready(function() {
    safeCall('arikaimStore',function(obj) {
        obj.initRows();
    },true);  
});