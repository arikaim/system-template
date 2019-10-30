/**
 *  Arikaim
 *  @copyright  Copyright (c) Konstantin Atanasov <info@arikaim.com>
 *  @license    http://www.arikaim.com/license
 *  http://www.arikaim.com
 */

function Libraries() {
    var self = this;
    
    this.init = function() {
        arikaim.ui.tab();
    };
}

var libraries = new Libraries();

arikaim.page.onReady(function() {
    libraries.init();
});
