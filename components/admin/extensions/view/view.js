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
        var component = arikaim.component.get('system:admin.extensions');
        var uninstall_message = component.getProperty('message.description');
        var message_title = component.getProperty('message.title');

        $('.popup-button').popup({ 
            on: 'click' 
        });

        arikaim.ui.button('.details-button',function(element) {
            var name = $(element).attr('extension');        
            extensions.showDetails(name);
        });
      
        arikaim.ui.button('.install-button',function(element) {
            var name = $(element).attr('extension');
         
            return extensions.install(name).done(function(result) {
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
                    self.init();
                    menu.loadSystemMenu();
                    menu.loadExtensionsMenu();
                });               
            }).fail(function(error) {
                console.log(error);
            });        
        });
       
        arikaim.ui.button('.un-install-button',function(element) {             
            var name = $(element).attr('extension');
            var message = arikaim.ui.template.render(uninstall_message,{ title: name });

            modal.confirm({
                title: message_title,
                description: message
            }).done(function() {                              
                return extensions.unInstall(name).done(function(result) {
                    arikaim.page.loadContent({
                        id: name,
                        params: { extension_name: name },
                        component: 'system:admin.extensions.extension',
                        replace: true
                    },function(result) {
                        // reload control panel menu
                        self.init();
                        menu.loadSystemMenu();
                        menu.loadExtensionsMenu();
                    });                  
                }).fail(function(error) {
                    console.log(error);
                });
            });
        });

        arikaim.ui.button('.update-button',function(element) {
            var name = $(element).attr('extension');
         
            return extensions.update(name).done(function(result) {
                arikaim.page.loadContent({
                    id: name,
                    params: { extension_name: name },
                    component: 'system:admin.extensions.extension',
                    replace: true
                },function(result) {                  
                    // reload control panel menu
                    self.init();
                    menu.loadSystemMenu();
                    menu.loadExtensionsMenu();
                });
            }).fail(function(error) {
                console.log(error);
            });
        });
      
        arikaim.ui.button('.change-status-button',function(element) {             
            var name = $(element).attr('extension');
            return extensions.changeStatus(name).done(function(result) {
                menu.loadExtensionsMenu();
            }).fail(function(error) {
                console.log(error);
            });
        }); 
    };
}

var extensions_view = new ExtensionsView();

arikaim.page.onReady(function() {   
    extensions_view.init();
});