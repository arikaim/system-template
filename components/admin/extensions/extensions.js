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
    
    this.install = function(name) {
        arikaim.put('/admin/api/extension/install/' + name,null,function(result) {           
            arikaim.page.loadContent({
                id: name,
                params: { extension_name: name },
                component: 'system:admin.extensions.extension',
                replace: true
            },function(result){
                extensions.init();
                // reload control panel menu
                menu.loadSystemMenu();
                menu.loadExtensionsMenu();
            });         
        });
    };
    
    this.unInstall = function(name) {
        arikaim.put('/admin/api/extension/uninstall/' + name,null,function(result) {
            arikaim.page.loadContent({
                id: name,
                params: { extension_name: name },
                component: 'system:admin.extensions.extension',
                replace: true
            },function(result){
                extensions.init();
                // reload control panel menu
                menu.loadSystemMenu();
                menu.loadExtensionsMenu();
            });
        });
    };

    this.changeStatus = function(name,status) {       
        if (isEmpty(status) == true) {
            var status = 'toggle';
        }
        if (status === true) status = 1;
        if (status === false) status = 0;

        arikaim.put('/admin/api/extension/status/' + name + "/" + status,null,function(result) {
            menu.loadExtensionsMenu();
        });
    };

    this.init = function() {
        $('#view_button').click();
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
