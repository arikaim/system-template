/**
 *  Arikaim
 *  @version    1.0  
 *  @copyright  Copyright (c) Konstantin Atanasov <info@arikaim.com>
 *  @license    http://www.arikaim.com/license.html
 *  http://www.arikaim.com
 * 
 */

function Position() {
    var self = this;
    
    this.shift = function(model_name, uuid, target_uuid, onSuccess, onError) {
        var data = { 
            model_name: model_name,
            uuid: uuid,
            target_uuid: target_uuid 
        };
        return arikaim.put('/core/api/ui/position/shift',data,onSuccess,onError);       
    };

    this.swap = function(model_name, uuid, target_uuid, onSuccess, onError) {
        var data = { 
            model_name: model_name,
            uuid: uuid,
            target_uuid: target_uuid 
        };
        return arikaim.put('/core/api/ui/position/swap',data,onSuccess,onError);           
    };
}

var position = new Position();