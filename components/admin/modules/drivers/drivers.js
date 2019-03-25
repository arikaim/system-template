/**
 *  Arikaim
 *  @version    1.0  
 *  @copyright  Copyright (c) Konstantin Atanasov <info@arikaim.com>
 *  @license    http://www.arikaim.com/license.html
 *  http://www.arikaim.com
 * 
 */

function Providers() {
    var self = this;

    this.init = function() {
        $('#install_providers').off();
        $('#install_providers').on('click',function(result) {
            $(this).addClass('disabled loading');
            self.install(null,function(result) {
                $('#install_modules').removeClass('disabled loading');
                self.init();
            },function(error) {
                $('#install_modules').removeClass('disabled loading');
                self.init();
            });
        });

    };

    this.enable = function(name,onSuccess,onError) {
        if (isEmpty(name) == true) {
            return false;
        }
        arikaim.put('/admin/api/provider/enable/' + name,null,function(result) {
            self.loadProviderDetails(name,function(result) {
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
        arikaim.put('/admin/api/provider/disable/' + name,null,function(result) {
            self.loadProviderDetails(name,function(result) {
                callFunction(onSuccess,result); 
            });           
        },function(error) {
            callFunction(onError,error);   
        });
    };

    this.loadProviderDetails = function(name,onSuccess) {      
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
        var name_param = '';
        if (isEmpty(name) == false) {
            name_param = '/' + name;
        }
        arikaim.put('/admin/api/providers/install' + name_param,null,function(result) {
            if (isEmpty(name) == false) {
                self.loadProviderDetails(name,function(result) {
                    callFunction(onSuccess,result); 
                });       
            } else {
                arikaim.page.loadContent({
                    id: 'tab_content',
                    component: 'system:admin.modules.providers'
                },function(result) {
                    callFunction(onSuccess,result); 
                });
            }           
        },function (error) {
            callFunction(onError,error);   
        });
    };
}

var providers = new Providers();

arikaim.page.onReady(function() {
    providers.init();
});
