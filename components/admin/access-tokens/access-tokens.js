/**
 *  Arikaim
 *  
 *  @copyright  Copyright (c) Konstantin Atanasov <info@arikaim.com>
 *  @license    http://www.arikaim.com/license.html
 * 
 *  http://www.arikaim.com
 * 
 */

function AccessTokens() {

    this.delete = function(token, onSuccess, onError) {
        return arikaim.delete('/core/api/tokens/delete/' + token,onSuccess,onError);          
    };

    this.deleteExpired = function(uuid, onSuccess, onError) {
        return arikaim.delete('/core/api/tokens/delete/expired/' + uuid,onSuccess,onError);          
    };
}

var accessTokens = new AccessTokens();
