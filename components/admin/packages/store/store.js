/**
 *  Arikaim
 *  @copyright  Copyright (c) Konstantin Atanasov <info@arikaim.com>
 *  @license    http://www.arikaim.com/license
 *  http://www.arikaim.com
 */
'use strict';

function ArikaimStore() {

   // this.registerOrder = function(orderId, apiDriver, onSuccess, onError) {
   //     var data = {
    //        order_id: orderId,
    //        api_driver: apiDriver
    //    };
        
       // return arikaim.apiCall('http://work.com/arikaim/api/arikaim/order/register','POST',data,onSuccess,onError,null,true);             
  //  };

    this.registerOrder = function( orderId, apiDriver, onSuccess, onError) {
        var data = {          
            order_id: orderId,
            api_driver: apiDriver            
        };

        return arikaim.post('/core/api/store/product',data,onSuccess,onError);      
    };   
}

var arikaimStore = new ArikaimStore();
