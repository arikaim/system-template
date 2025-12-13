/**
 *  Arikaim
 *  @copyright  Copyright (c) Konstantin Atanasov <info@arikaim.com>
 *  @license    http://www.arikaim.com/license
 *  http://www.arikaim.com
 */
'use strict';

function Cache() {
    var self = this;

    this.enable = function(onSuccess, onError) {      
        return arikaim.put('/core/api/cache/enable',null,onSuccess,onError);
    };

    this.disable = function(onSuccess, onError) {      
        return arikaim.put('/core/api/cache/disable',null,onSuccess,onError);
    };

    this.setDriver = function(driverName, onSuccess, onError) { 
        return arikaim.put('/core/api/cache/driver',{ 
            name: driverName
        },onSuccess,onError);
    };

    this.clear = function(onSuccess, onError) {      
        return arikaim.delete('/core/api/cache/clear',onSuccess,onError);
    };

    this.init = function() {   
        arikaim.ui.loadComponentButton('.cache-info-button');

        $('#cache_driver_dropdown').on('change', function() {           
            self.setDriver($(this).val(),function(result) {
                arikaim.ui.getComponent('toast').show(result.message);               
            });           
        });

        $('#cahce_switch').on('change', function(event) {
            if (event.currentTarget.checked == true) {
                arikaim.ui.show('#cache_buttons');             
                self.enable(function(result) {
                    arikaim.ui.getComponent('toast').show(result.message);     
                });
            } else {
                arikaim.ui.hide('#cache_buttons');
                self.disable(function(result) {
                    arikaim.ui.getComponent('toast').show(result.message);     
                });
            }           
        });

        arikaim.ui.button('#clear_cache_button',function(element) {          
            return self.clear(function(result) {  
                var message = result.message;       
                arikaim.ui.form.showMessage(message);                                          
            },function(error) {
                arikaim.ui.form.showMessage({
                    selector: '#message',
                    message: error,
                    class: 'error',
                    removeClass: 'success'
                });
            });
        });
    };
}

var cache = new Cache();

arikaim.component.onLoaded(function() {    
    cache.init();
});
