'use strict';

arikaim.component.onLoaded(function() {
    $('.change-driver-status').on('change', function() {
        var status = $(this).val();      
        var driverName = $(this).attr('driver_name');
                 
        if (isEmpty(driverName) || status == 0) {
            drivers.disable(driverName,function(result) {               
            });              
        } else {               
            drivers.enable(driverName,function(result) {              
            });
        }            
       
    });

    arikaim.ui.button('.driver-config',function(element) {  
        var name = $(element).attr('driver-name');
        arikaim.events.emit('driver.config',element,name);       
    });
});