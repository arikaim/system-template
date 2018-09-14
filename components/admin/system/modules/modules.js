/**
 *  Arikaim
 *  @version    1.0  
 *  @copyright  Copyright (c) Konstantin Atanasov <info@arikaim.com>
 *  @license    http://www.arikaim.com/license.html
 *  http://www.arikaim.com
 * 
 */

function CoreModules() {

    var update_button = '#update_button';
    var self = this;

    this.init = function() {
        $(update_button).off();
        $(update_button).on('click',function() {
            $(this).addClass('disabled loading');
            self.update();
        });
    };

    this.update = function() {
        arikaim.get('/admin/api/modules/update',function(result) {
            arikaim.page.loadContent({
                id: 'tab_content',
                component: 'system:admin.system.modules'
            });
            $(update_button).removeClass('disabled loading');
        },function (errors) {
            $(update_button).removeClass('disabled loading');
        });
    };
}

var modules = new CoreModules();

arikaim.page.onReady(function() {
    modules.init();
});
