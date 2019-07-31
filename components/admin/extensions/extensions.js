/**
 *  Arikaim
 *  Control Panel Extensions Component
 *  @copyright  Copyright (c) Konstantin Atanasov   <info@arikaim.com>
 *  @license    http://www.arikaim.com/license.html
 *  http://www.arikaim.com
 *  
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
            params: { extension_name: name }
        },function(result) {
            $('#extension_details_tab .item').tab();
            $('#events_tab .item').tab();
            $('#template_tab .item').tab(); 
        });   
    };
    
    this.update = function(name, onSuccess, onError) {
        return arikaim.put('/core/api/extension/update/' + name,null,onSuccess,onError);          
    };

    this.install = function(name, onSuccess, onError) {
        return arikaim.put('/core/api/extension/install/' + name,null,onSuccess,onError);            
    };
    
    this.unInstall = function(name, onSuccess, onError) {        
        return arikaim.put('/core/api/extension/uninstall/' + name,null,onSuccess,onError);           
    };

    this.changeStatus = function(name, status, onSuccess, onError) {       
        status = getDefaultValue(status,'toggle');         
        if (status === true) status = 1;
        if (status === false) status = 0; 

        return arikaim.put('/core/api/extension/status/' + name + "/" + status,null,onSuccess,onError);           
    };

    this.init = function() {
        arikaim.ui.tab();
    };
}

var extensions = new Extensions();

arikaim.page.onReady(function() {       
    extensions.init();    
});
