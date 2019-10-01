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
        var message_title = component.getProperty('message.title');

        $('.popup-button').popup({ 
            on: 'click' 
        });

        $('.enable-dropdown').dropdown({
            onChange: function(value) {               
                var name = $(this).attr('extension');
                return extensions.changeStatus(name,value,function(result) {
                    menu.loadExtensionsMenu();
                    menu.loadSystemMenu();
                    var message = result.message;

                    arikaim.page.loadContent({
                        id: name,
                        params: { extension_name: name },
                        component: 'system:admin.extensions.extension',
                        replace: true
                    },function(result) {  
                        self.init();
                        arikaim.ui.form.showMessage({
                            element: '#message_' + name,
                            message: message
                        });
                    });
                },function(error) {
                    arikaim.ui.form.showMessage({
                        element: '#message_' + name,
                        message: error
                    });
                });     
            }
        });

        arikaim.ui.button('.details-button',function(element) {
            var name = $(element).attr('extension');        
            extensions.showDetails(name);
        });
      
        arikaim.ui.button('.install-button',function(element) {
            var name = $(element).attr('extension');
         
            return extensions.install(name,function(result) {
                var message = result.message;

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
                    arikaim.ui.form.showMessage({
                        element: '#message_' + name,
                        message: message
                    });
                });               
            },function(error) {
                arikaim.ui.form.showMessage({
                    element: '#message_' + name,
                    message: error,
                    class: 'error',
                    remove_class:'success'
                });
            });        
        });
       
        arikaim.ui.button('.un-install-button',function(element) {             
            var name = $(element).attr('extension');
            var uninstall_message = component.getProperty('message.description');
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
                var message = result.message;              
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
                    arikaim.ui.form.showMessage({
                        element: '#message_' + name,
                        message: message
                    });
                });
            }).fail(function(error) {
                arikaim.ui.form.showMessage({
                    element: '#message_' + name,
                    message: error
                });
            });
        });
    };
}

var extensionsView = new ExtensionsView();

arikaim.page.onReady(function() {   
    extensionsView.init();
});