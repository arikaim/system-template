/**
 *  Arikaim
 *  @version    1.0  
 *  @copyright  Copyright (c) Konstantin Atanasov <info@arikaim.com>
 *  @license    http://www.arikaim.com/license.html
 *  http://www.arikaim.com
 * 
 */

function ExtensionsView() {
    var self = this;

    this.init = function() {
        var component = arikaim.getComponent('system:admin.extensions');
        var uninstall_message = component.getProperty('message.description');
        var message_title = component.getProperty('message.title');

        $('.popup-button').popup({ 
            on: 'click' 
        });

        $('.details-button').off();
        $('.details-button').on('click',function() {     
            var name = $(this).attr('extension');        
            extensions.showDetails(name);
        });
        
        $('.install-button').off();
        $('.install-button').on('click',function() {             
            var name = $(this).attr('extension');
            $(this).addClass('disabled loading');    
            extensions.install(name,function(result) {
                arikaim.page.loadContent({
                    id: name,
                    params: { extension_name: name },
                    component: 'system:admin.extensions.extension',
                    replace: true
                },function(result) {
                    if (isObject(extensions_view) == true) {
                        extensions_view.init();
                    }               
                    // reload control panel menu
                    menu.loadSystemMenu();
                    menu.loadExtensionsMenu();
                }); 
                $(this).removeClass('disabled loading');      
            },function(error) {
                $(this).removeClass('disabled loading'); 
            });        
        });
        
        $('.un-install-button').off();
        $('.un-install-button').on('click',function() {             
            var name = $(this).attr('extension');
            var message = arikaim.template.render(uninstall_message,{ title: name });
            confirmDialog.show({
                title: message_title,
                description: message
            },function() {      
                $(this).addClass('disabled loading');              
                extensions.unInstall(name,function(result) {
                    arikaim.page.loadContent({
                        id: name,
                        params: { extension_name: name },
                        component: 'system:admin.extensions.extension',
                        replace: true
                    },function(result) {
                        self.init();
                        // reload control panel menu
                        menu.loadSystemMenu();
                        menu.loadExtensionsMenu();
                    });
                    $(this).removeClass('disabled loading'); 
                },function(error) {
                    $(this).removeClass('disabled loading'); 
                });
            });
        });
        
        $('.change-status-button').off();
        $('.change-status-button').on('click',function() {             
            var name = $(this).attr('extension');
            extensions.changeStatus(name);
        }); 
    };
}

var extensions_view = new ExtensionsView();

arikaim.page.onReady(function() {   
    extensions_view.init();
});