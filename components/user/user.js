/**
 *  Arikaim
 *  
 *  @copyright  Copyright (c) Konstantin Atanasov <info@arikaim.com>
 *  @license    http://www.arikaim.com/license.html
 *  http://www.arikaim.com
 * 
 */

function User() {

    this.login = function(form_id,onSuccess,onError) {
        return arikaim.post('/core/api/user/login/',form_id,onSuccess,onError);       
    };

    this.logout = function(onSuccess,onError) {      
        return arikaim.get('/core/api/user/logout/',onSuccess,onError);          
    };
};

var user = new User();