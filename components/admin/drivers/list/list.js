'use strict';

arikaim.component.onLoaded(function() {
    $('.status-switch').on('change', function() {          
        var driverName = $(this).attr('driver-name');
    
        if (this.checked == true) {
            drivers.enable(driverName);
        } else {
            drivers.disable(driverName);
        }
           
    });
    
    arikaim.ui.button('.driver-config',function(element) {  
        var name = $(element).attr('driver-name');
        arikaim.events.emit('driver.config',element,name);       
    });
});