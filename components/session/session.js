/**
 *  Arikaim
 *  @version    1.0  
 *  @copyright  Copyright (c) Konstantin Atanasov <info@arikaim.com>
 *  @license    http://www.arikaim.com/license.html
 *  http://www.arikaim.com
 * 
 */

function Session(id,recreate_interval) {

    var session_id = id;
    var recreate_handler = null;
    var self = this;

    this.getInfo = function(onDone,onError) {
        return arikaim.get('/core/api/session/',fonDone,onError);          
    };

    this.set = function(key, value, onDone, onError) {
        var data = {'key': key,'value': value };
        return arikaim.put('/core/api/session/',data,onDone,onError);           
    };

    this.getId = function() { 
        return session_id;
    };

    this.setRecreateInterval = function(interval) {
        if (isNaN(interval) == true) {
            this.removeRecreateInterval();
            return false;
        }  
        if (interval > 30000) {     
            arikaim.log('session recreate interval: ' + interval + " microseconds.");       
            recreate_handler = setInterval(this.recreate,interval);
            return true;
        }
        return false;
    };

    this.removeRecreateInterval = function() {
        clearInterval(recreate_handler);
    };

    this.recreate = function(onDone, onError) {
        arikaim.log('Recreating session on server');
        return arikaim.get('/core/api/session/restart/',onDone,onError);            
    };

    this.getInterval = function(minutes) {
        return (isNaN(minutes) == true) ? 0 : (minutes * 60 * 1000);           
    };

    this.init = function() {
        this.getInfo(function(result) {
            var interval = self.getInterval(result.recreate);                 
            self.setRecreateInterval(interval);           
        });
    };

    if (isNaN(recreate_interval) == false) {
        this.setRecreateInterval(recreate_interval);
    };    
}