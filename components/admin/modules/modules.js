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
        controlPanel.initTabItems();
    };

    this.enable = function(name,onSuccess,onError) {
        if (isEmpty(name) == true) {
            return false;
        }
        arikaim.put('/core/api/module/enable/' + name,null,function(result) {
            self.loadModuleDetails(name,function(result) {
                callFunction(onSuccess,result); 
            });            
        },function(error) {
            callFunction(onError,error);           
        });
    };

    this.disable = function(name,onSuccess,onError) {
        if (isEmpty(name) == true) {
            return false;
        }
        arikaim.put('/core/api/module/disable/' + name,null,function(result) {
            self.loadModuleDetails(name,function(result) {
                callFunction(onSuccess,result); 
            });           
        },function(error) {
            callFunction(onError,error);   
        });
    };

    this.loadModuleDetails = function(name,onSuccess) {      
        arikaim.page.loadContent({
            id: name,
            params: { name: name },
            component: 'system:admin.modules.module',
            replace: true
        },function(result) {
            callFunction(onSuccess,result); 
        });
    };

    this.install = function(name,onSuccess,onError) {
        arikaim.put('/core/api/module/install/' + name,null,function(result) {
            if (isEmpty(name) == false) {
                self.loadModuleDetails(name,function(result) {
                    callFunction(onSuccess,result); 
                });       
            } else {
                arikaim.page.loadContent({
                    id: 'tool_content',
                    component: 'system:admin.modules'
                },function(result) {
                    callFunction(onSuccess,result); 
                });
            }           
        },function (error) {
            callFunction(onError,error);   
        });
    };

    this.unInstall = function(name,onSuccess,onError) {
        arikaim.delete('/core/api/module/uninstall/' + name,null,function(result) {
            if (isEmpty(name) == false) {
                self.loadModuleDetails(name,function(result) {
                    callFunction(onSuccess,result); 
                });       
            } else {
                arikaim.page.loadContent({
                    id: 'tool_content',
                    component: 'system:admin.modules'
                },function(result) {
                    callFunction(onSuccess,result); 
                });
            }           
        },function (error) {
            callFunction(onError,error);   
        });
    };
}

var modules = new CoreModules();

arikaim.page.onReady(function() {
    modules.init();
});
