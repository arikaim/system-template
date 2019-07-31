/**
 *  Arikaim
 *  @version    1.0  
 *  @copyright  Copyright (c) Konstantin Atanasov <info@arikaim.com>
 *  @license    http://www.arikaim.com/license.html
 *  http://www.arikaim.com
 * 
 */

function Update() {
    
    this.checkForNewVersion = function(onSuccess) {
        return arikaim.get('/core/api/update/check',onSuccess,onError);
    };

    this.update = function(onSuccess,onError) {
        return arikaim.get('/core/api/update/',onSuccess,onError);
    };

    this.init = function() {
        arikaim.ui.button('#update_button',function(element) {
            return update.update();
        });
    }
}

var update = new Update();

arikaim.page.onReady(function() {
    update.init();
});