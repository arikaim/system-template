/**
 *  Arikaim
 *  @version    1.0  
 *  @copyright  Copyright (c) Konstantin Atanasov <info@arikaim.com>
 *  @license    http://www.arikaim.com/license.html
 *  http://www.arikaim.com
 * 
 */

function Settings() {

    /**
     * Save setting variable
     * @param {string} name - name of setting variable
     * @param {*} value - variable value
     * @param {function} onSuccess - called after settings variable is saved.
     */
    this.save = function(name,value,onSuccess,onError) {
        var params = { 
            key: name,
            value: value 
        };
        arikaim.put('/core/api/options/',params,onSuccess,onError);
    };

    this.saveAll = function(form_id,onSuccess,onError) {
        arikaim.post('/core/api/options/',form_id,onSuccess,onError);
    };

    this.init = function() {
        controlPanel.initTabItems();
        $('#user_settings_button').click();
    };

    /**
     * Get setting variable
     * @param {setting} name  - variable name
     * @param {function} onSuccess - called after reuest is done 
     */
    this.get = function(name,onSuccess) {
        arikaim.get('/core/api/options/' + name,onSuccess);
    };
}

var settings = new Settings();

arikaim.page.onReady(function() {
    settings.init();
});