/**
 *  Arikaim
 *  @version    1.0  
 *  @copyright  Copyright (c) Konstantin Atanasov <info@arikaim.com>
 *  @license    http://www.arikaim.com/license.html
 *  http://www.arikaim.com
 * 
 */

function System() {
    this.init = function() {   
        arikaim.ui.tab();
        $('#view_settings').click();
    };
}

var system = new System();

arikaim.page.onReady(function() {
    system.init();    
});