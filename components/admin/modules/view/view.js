/**
 *  Arikaim
 *  @version    1.0  
 *  @copyright  Copyright (c) Konstantin Atanasov <info@arikaim.com>
 *  @license    http://www.arikaim.com/license.html
 *  http://www.arikaim.com
 * 
 */

function ModulesView() {
    var self = this;

    var install_button = '.install-button';
    var update_button = '.update-button';
    var enable_button = '.enable-button';
    var disable_button = '.disable-button';

    this.init = function() {
      
        arikaim.ui.button(install_button,function(element) {          
            var name = $(element).attr('name');

            return modules.install(name).done(function(result) {               
                modules.loadModuleDetails(name,function(result) {
                    self.init();
                });               
            }).fail(function(error) {              
                self.init();
            });
        });

        arikaim.ui.button(update_button,function(element) {           
            var name = $(element).attr('name');

            return modules.update(name).done(function(result) {
                modules.loadModuleDetails(name,function(result) {
                    self.init();
                }); 
            }).fail(function(error) {               
                self.init();
            });
        });

        arikaim.ui.button(enable_button,function(element) {         
            var name = $(element).attr('name');

            return modules.enable(name).done(function(result) {              
                modules.loadModuleDetails(name,function(result) {
                    self.init();
                });               
            }).fail(function(error) {              
                self.init();
            });
        });

        arikaim.ui.button(disable_button,function(element) {          
            var name = $(element).attr('name');

            return modules.disable(name).done(function(result) {              
                modules.loadModuleDetails(name,function(result) {
                    self.init();
                });               
            }).fail(function(error) {               
                self.init();
            });
        });
    };
}

var modules_view = new ModulesView();

arikaim.page.onReady(function() {   
    modules_view.init();
});