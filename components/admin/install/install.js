/**
 *  Arikaim  
 *  @copyright  Copyright (c) Konstantin Atanasov   <info@arikaim.com>
 *  @license    http://www.arikaim.com/license
 *  http://www.arikaim.com
 */

function Install() {
    var self = this;
    this.status = null;

    this.install = function(formId, onSuccess, onError) {
        return arikaim.post('/core/api/install/',formId,onSuccess,onError);
    };

    this.init = function() {
        progressBar.hide(true);
        $('#continue_button').hide();      
        
        arikaim.ui.button('#continue_button',function() {
            return arikaim.page.load(arikaim.getBaseUrl() + '/admin/',false); 
        });
    };
}

var install = new Install();

$(document).ready(function() {
    install.init();
});
