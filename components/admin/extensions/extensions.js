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
        controlPanel.setActiveTab('#details_button');
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
    
    this.install = function(name,onSuccess,onError) {
        arikaim.put('/core/api/extension/install/' + name,null,function(result) {    
            callFunction(onSuccess,result);                     
        },function (error) {
            callFunction(onError,error);
        });
    };
    
    this.unInstall = function(name,onSuccess,onError) {
        arikaim.put('/core/api/extension/uninstall/' + name,null,function(result) {
            callFunction(onSuccess,result);           
        },function (error) {
            callFunction(onError,error);
        });
    };

    this.changeStatus = function(name,status) {       
        if (isEmpty(status) == true) {
            var status = 'toggle';
        }
        if (status === true) status = 1;
        if (status === false) status = 0;

        arikaim.put('/core/api/extension/status/' + name + "/" + status,null,function(result) {
            menu.loadExtensionsMenu();
        });
    };

    this.init = function() {
        this.initTabs();
    };

    this.initTabs = function() {
        controlPanel.initTabItems();
    };
}

var extensions = new Extensions();

arikaim.page.onReady(function() {       
    extensions.init();    
});
