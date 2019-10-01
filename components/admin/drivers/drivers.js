/**
 *  Arikaim
 *  @version    1.0  
 *  @copyright  Copyright (c) Konstantin Atanasov <info@arikaim.com>
 *  @license    http://www.arikaim.com/license.html
 *  http://www.arikaim.com
 * 
 */

function Drivers() {
    var self = this;
  
    this.enable = function(name, onSuccess, onError) {
        var data = {
            name: name,
            status: 1
        };
        return arikaim.put('/core/api/driver/status',data,onSuccess,onError);          
    };

    this.disable = function(name, onSuccess, onError) {
        var data = {
            name: name,
            status: 0
        };
        return arikaim.put('/core/api/driver/status',data,onSuccess,onError);          
    };

    this.getConfig = function(name, onSuccess, onError) {
        return arikaim.get('/core/api/driver/config/' + name,onSuccess,onError);
    };

    this.saveConfig = function(config, onSuccess, onError) {
        return arikaim.put('/core/api/driver/config',config,onSuccess,onError);
    };

    this.loadConfigForm = function(name, element_id, onSuccess) {
        return arikaim.page.loadContent({
            id: element_id,
            params: { name: name },
            component: 'system:admin.modules.drivers.config.form'
        },function(result) {                  
            callFunction(onSuccess,result);
        });
    };

    this.loadConfig = function(name, element_id, onSuccess) {
        return arikaim.page.loadContent({
            id: element_id,
            params: { driver_name: name },
            component: 'system:admin.modules.drivers.config'
        },function(result) {                  
            callFunction(onSuccess,result);
        });
    };

    this.createFullName = function(name, category) {
        return (isEmpty(category) == false) ? name + ":" + category : name;
    };    
}

var drivers = new Drivers();
