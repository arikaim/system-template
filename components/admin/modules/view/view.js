/**
 *  Arikaim
 *  
 *  @copyright  Copyright (c) Konstantin Atanasov <info@arikaim.com>
 *  @license    http://www.arikaim.com/license.html
 *  http://www.arikaim.com
 * 
 */

function ModulesView() {
    var self = this;

    this.init = function() {
      
        arikaim.ui.button('.install-button',function(element) {          
            var name = $(element).attr('name');

            return modules.install(name,function(result) {   
                var message = result.message;            
                modules.loadModuleDetails(name,function(result) {
                    self.init();
                    arikaim.ui.form.showMessage({
                        element: '#message_' + name,
                        message: message
                    });
                });               
            },function(error) {              
                self.init();
                arikaim.ui.form.showMessage({
                    element: '#message_' + name,
                    message: message,
                    class: 'error',
                    remove_class:'success'
                });
            });
        });

        arikaim.ui.button('.update-button',function(element) {           
            var name = $(element).attr('name');

            return modules.update(name,function(result) {
                var message = result.message;    
                modules.loadModuleDetails(name,function(result) {
                    self.init();
                    arikaim.ui.form.showMessage({
                        element: '#message_' + name,
                        message: message
                    });
                }); 
            },function(error) {               
                self.init();
                arikaim.ui.form.showMessage({
                    element: '#message_' + name,
                    message: message,
                    class: 'error',
                    remove_class:'success'
                });
            });
        });

        arikaim.ui.button('.enable-button',function(element) {         
            var name = $(element).attr('name');

            return modules.enable(name,function(result) {     
                var message = result.message;             
                modules.loadModuleDetails(name,function(result) {
                    self.init();
                    arikaim.ui.form.showMessage({
                        element: '#message_' + name,
                        message: message
                    });
                });               
            },function(error) {              
                self.init();
                arikaim.ui.form.showMessage({
                    element: '#message_' + name,
                    message: message,
                    class: 'error',
                    remove_class:'success'
                });
            });
        });

        arikaim.ui.button('.disable-button',function(element) {          
            var name = $(element).attr('name');

            return modules.disable(name,function(result) {   
                var message = result.message;               
                modules.loadModuleDetails(name,function(result) {
                    self.init();
                    arikaim.ui.form.showMessage({
                        element: '#message_' + name,
                        message: message
                    });
                });               
            },function(error) {               
                self.init();
                arikaim.ui.form.showMessage({
                    element: '#message_' + name,
                    message: message,
                    class: 'error',
                    remove_class:'success'
                });
            });
        });
    };
}

var modulesView = new ModulesView();

arikaim.page.onReady(function() {   
    modulesView.init();
});