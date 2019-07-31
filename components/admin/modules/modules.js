/**
 *  Arikaim
 *  @version    1.0  
 *  @copyright  Copyright (c) Konstantin Atanasov <info@arikaim.com>
 *  @license    http://www.arikaim.com/license.html
 *  http://www.arikaim.com
 * 
 */

function CoreModules() {
    var self = this;

    this.init = function() {
        arikaim.ui.tab();
    };

    this.enable = function(name,onSuccess,onError) {
        return arikaim.put('/core/api/module/enable/' + name,null,onSuccess,onError);          
    };

    this.disable = function(name,onSuccess,onError) {
        return arikaim.put('/core/api/module/disable/' + name,null,onSuccess,onError);          
    };

    this.loadModuleDetails = function(name, onSuccess, onError) {      
        return arikaim.page.loadContent({
            id: name,
            params: { name: name },
            component: 'system:admin.modules.module',
            replace: true
        },onSuccess,onError);
    };

    this.install = function(name,onSuccess,onError) {
        return arikaim.put('/core/api/module/install/' + name,null,onSuccess,onError);          
    };

    this.unInstall = function(name,onSuccess,onError) {
        return arikaim.delete('/core/api/module/uninstall/' + name,onSuccess,onError);          
    };
  
    this.update = function(name,onSuccess,onError) {
        return arikaim.put('/core/api/module/update/' + name,null,onSuccess,onError);
    };
}

var modules = new CoreModules();

arikaim.page.onReady(function() {
    modules.init();
});
