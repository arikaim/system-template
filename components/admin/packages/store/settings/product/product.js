/**
 *  Arikaim
 *  @copyright  Copyright (c) Konstantin Atanasov   <info@arikaim.com>
 *  @license    http://www.arikaim.com/license
 *  http://www.arikaim.com
 */
'use strict';

$(document).ready(function() {
    arikaim.ui.form.addRules('#register_order_form',{});

    arikaim.ui.form.onSubmit("#register_order_form",function() {  
        var orderId = $('#order_id').val();

        return arikaimStore.registerOrder(orderId,'envato',function(result) {
            console.log(result);
        
        });
    },function(result) {        
    });

}); 