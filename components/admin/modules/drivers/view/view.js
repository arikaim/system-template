/**
 *  Arikaim
 *  @copyright  Copyright (c) Konstantin Atanasov <info@arikaim.com>
 *  @license    http://www.arikaim.com/license
 *  http://www.arikaim.com
 */
'use strict';

function DriversView() {
   
    this.init = function() {
        this.loadMessages('system:admin.messages');
        this.initRows();                    
    };

    this.initRows = function() {
        arikaim.ui.loadComponentButton('.driver-details');

        arikaim.ui.button('.driver-uninstall',function(element) {                           
            var name = $(element).attr('name');
            var uuid = $(element).attr('uuid');
            
            return arikaim.ui.getComponent('confirm_uninstall_driver').open(function() {
                drivers.uninstall(name,function(result) {
                    $('#' + uuid).remove();
                    arikaim.ui.getComponent('toast').show(result.message);
                });
            });
        });

        arikaim.ui.button('.driver-config',function(element) {                
            arikaim.events.emit('driver.config',element);

            var name = $(element).attr('name');
            drivers.loadConfig(name,'driver_details',null,'sixteen wide');
        });
       
        $('.status-switch').on('change', function() {          
            var driverName = $(this).attr('driver-name');
      
            if (this.checked == true) {
                drivers.enable(driverName);
            } else {
                drivers.disable(driverName);
            }
           
        });
    };    
};

var driversView = createObject(DriversView,ControlPanelView);

arikaim.component.onLoaded(function() {    
    driversView.init();  
});
