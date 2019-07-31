/**
 *  Arikaim
 *  @version    1.0  
 *  @copyright  Copyright (c) Konstantin Atanasov <info@arikaim.com>
 *  @license    http://www.arikaim.com/license.html
 *  http://www.arikaim.com
 * 
 */

function Options() {

    /**
     * Save setting variable
     * @param {String} name - name of setting variable
     * @param {*} value - variable value
     * @param {function} onSuccess - called after settings variable is saved.
     */
    this.save = function(name, value, onSuccess, onError) {
        var params = { 
            key: name,
            value: value 
        };
        return arikaim.put('/core/api/options/',params,onSuccess,onError);
    };

    this.saveAll = function(form_id, onSuccess, onError) {
        return arikaim.post('/core/api/options/',form_id,onSuccess,onError);
    };

    /**
     * Get setting variable
     * @param {String} name  - variable name
     * @param {function} onSuccess - called after reuest is done 
     */
    this.get = function(name, onSuccess, onError) {
        return arikaim.get('/core/api/options/' + name,onSuccess,onError);
    };
}

var options = new Options();
