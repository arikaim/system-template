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
    var enable_button = '.enable-button';
    var disable_button = '.disable-button';

    this.init = function() {
        
        $('.module-button').off();

        $(install_button).on('click',function() {
            $(this).addClass('disabled loading');
            var name = $(this).attr('name');
            modules.install(name,function(result) {
                $(install_button).removeClass('disabled loading');
                self.init();
            },function(error) {
                $(install_button).removeClass('disabled loading');
                self.init();
            });
        });

        $(enable_button).on('click',function() {
            $(this).addClass('disabled loading');
            var name = $(this).attr('name');
            modules.enable(name,function(result) {
                $(install_button).removeClass('disabled loading');
                self.init();
            },function(error) {
                $(install_button).removeClass('disabled loading');
                self.init();
            });
        });

        $(disable_button).on('click',function() {
            $(this).addClass('disabled loading');
            var name = $(this).attr('name');
            modules.disable(name,function(result) {
                $(install_button).removeClass('disabled loading');
                self.init();
            },function(error) {
                $(install_button).removeClass('disabled loading');
                self.init();
            });
        });
    };
}

var modules_view = new ModulesView();

arikaim.page.onReady(function() {   
    modules_view.init();
});