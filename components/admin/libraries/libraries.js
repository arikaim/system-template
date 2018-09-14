/**
 *  Arikaim
 *  @version    1.0  
 *  @copyright  Copyright (c) Konstantin Atanasov <info@arikaim.com>
 *  @license    http://www.arikaim.com/license.html
 *  http://www.arikaim.com
 * 
 */

function Libraries() {
    this.init = function() {
        controlPanel.initTabItems();
    };
}

var libraries = new Libraries();

arikaim.page.onReady(function() {
    libraries.init();
});
