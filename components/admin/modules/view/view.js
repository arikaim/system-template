/**
 *  Arikaim
 *  @copyright  Copyright (c) Konstantin Atanasov <info@arikaim.com>
 *  @license    http://www.arikaim.com/license
 *  http://www.arikaim.com
 */

function ModulesView() {
    var self = this;

    this.init = function() {
        arikaim.ui.button('.install-button',function(element) {          
            var name = $(element).attr('name');

            return packages.install(name,'module',function(result) {   
                var message = result.message;            
                modules.loadModuleDetails(name,function(result) {
                    self.init();
                    arikaim.ui.form.showMessage({
                        selector: '#message_' + name,
                        message: message
                    });
                });               
            },function(error) {              
                self.init();
                arikaim.ui.form.showMessage({
                    selector: '#message_' + name,
                    message: message,
                    class: 'error',
                    removeClass: 'success'
                });
            });
        });

        arikaim.ui.button('.update-button',function(element) {           
            var name = $(element).attr('name');

            return packages.update(name,'module',function(result) {
                var message = result.message;    
                modules.loadModuleDetails(name,function(result) {
                    self.init();
                    arikaim.ui.form.showMessage({
                        selector: '#message_' + name,
                        message: message
                    });
                }); 
            },function(error) {               
                self.init();
                arikaim.ui.form.showMessage({
                    selector: '#message_' + name,
                    message: message,
                    class: 'error',
                    removeClass: 'success'
                });
            });
        });

        arikaim.ui.button('.enable-button',function(element) {         
            var name = $(element).attr('name');

            return packages.enable(name,'module',function(result) {     
                var message = result.message;             
                modules.loadModuleDetails(name,function(result) {
                    self.init();
                    arikaim.ui.form.showMessage({
                        selector: '#message_' + name,
                        message: message
                    });
                });               
            },function(error) {              
                self.init();
                arikaim.ui.form.showMessage({
                    selector: '#message_' + name,
                    message: message,
                    class: 'error',
                    removeClass: 'success'
                });
            });
        });

        arikaim.ui.button('.disable-button',function(element) {          
            var name = $(element).attr('name');

            return packages.disable(name,'module',function(result) {   
                var message = result.message;               
                modules.loadModuleDetails(name,function(result) {
                    self.init();
                    arikaim.ui.form.showMessage({
                        selector: '#message_' + name,
                        message: message
                    });
                });               
            },function(error) {               
                self.init();
                arikaim.ui.form.showMessage({
                    selector: '#message_' + name,
                    message: message,
                    class: 'error',
                    removeClass: 'success'
                });
            });
        });

        arikaim.ui.button('.update-composer',function(element) {          
            var name = $(element).attr('name');
         
            return packages.updateComposerPackages(name,'module',function(result) {
                var message = result.message;  
                arikaim.ui.form.showMessage({
                    selector: '#message_' + name,
                    message: message
                });     
                arikaim.page.loadContent({
                    id: "composer_packages_" + name,
                    params: { name: name },
                    loaderClass: 'ui active inline centered mini blue loader',
                    component: 'system:admin.packages.requirements.composer-packages',
                    replace: true
                });
            },function(error) { 
                arikaim.ui.form.showMessage({
                    selector: '#message_' + name,
                    message: error,
                    class: 'error',
                    removeClass: 'success'
                }); 
            });
        });
    };
}

var modulesView = new ModulesView();

arikaim.page.onReady(function() {   
    modulesView.init();
});
