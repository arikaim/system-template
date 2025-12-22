/**
 *  Arikaim
 *  @copyright  Copyright (c) Konstantin Atanasov <info@arikaim.com>
 *  @license    http://www.arikaim.com/license
 *  http://www.arikaim.com
 */
'use strict';

function DriversView() {
   
    this.init = function() {
        paginator.init('drivers_rows');                     
    };

    this.initRows = function() {
        arikaim.ui.loadComponentButton('.driver-details');

        arikaim.ui.button('.driver-uninstall',function(element) {                           
            var name = $(element).attr('name');
            var uuid = $(element).attr('uuid');
            
            return modal.confirmDelete({ 
                title: 'Confirm',
                description: 'Confirm Uninstall Driver'
            },function() {
                drivers.uninstall(name,function(result) {
                    $('#' + uuid).remove();
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

var driversView = new DriversView();

arikaim.component.onLoaded(function() {    
    driversView.init();
    driversView.initRows();
});
