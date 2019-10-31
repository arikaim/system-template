/**
 *  Arikaim
 *  @copyright  Copyright (c) Konstantin Atanasov   <info@arikaim.com>
 *  @license    http://www.arikaim.com/license
 *  http://www.arikaim.com
 */

/**
 *  @class  Extensions 
 *  Control panel extensions manager component
 */
function Extensions() {
    var self = this;
    
    this.showDetails = function(name) {
        arikaim.ui.setActiveTab('#details_button');
        arikaim.page.loadContent({
            id: 'tab_content',
            component: 'system:admin.extensions.extension.details',
            params: { extension: name }
        });   
    };
    
    this.update = function(name, onSuccess, onError) {
        var data = {
            name: name
        };
        return arikaim.put('/core/api/extension/update',data,onSuccess,onError);          
    };

    this.install = function(name, onSuccess, onError) {
        var data = { name: name };   
        return arikaim.put('/core/api/extension/install',data,onSuccess,onError);            
    };
    
    this.unInstall = function(name, onSuccess, onError) { 
        var data = { name: name };       
        return arikaim.put('/core/api/extension/uninstall',data,onSuccess,onError);           
    };

    this.enable = function(name, onSuccess, onError) {    
        var data = { name: name, status: 1 };   
        return arikaim.put('/core/api/extension/status',data,onSuccess,onError);        
    };

    this.disable = function(name, onSuccess, onError) {    
        var data = { name: name, status: 0 };   
        return arikaim.put('/core/api/extension/status',data,onSuccess,onError);        
    };

    this.changeStatus = function(name, status, onSuccess, onError) {         
        var data = { name: name, status: status };
        return arikaim.put('/core/api/extension/status',data,onSuccess,onError);           
    };

    this.init = function() {
        arikaim.ui.tab();
    };
}

var extensions = new Extensions();

arikaim.page.onReady(function() {       
    extensions.init();    
});
