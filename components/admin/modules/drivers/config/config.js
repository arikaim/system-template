$(document).ready(function() {
    $('.drivers-dropdown').dropdown({
        onChange: function(value) {                          
            drivers.loadConfigForm(value,'driver_config');
        }
    });
});