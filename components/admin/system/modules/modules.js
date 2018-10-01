/**
 *  Arikaim
 *  @version    1.0  
 *  @copyright  Copyright (c) Konstantin Atanasov <info@arikaim.com>
 *  @license    http://www.arikaim.com/license.html
 *  http://www.arikaim.com
 * 
 */

function CoreModules() {

    var install_button = '.install-button';
    var self = this;

    this.init = function() {
        $(install_button).off();
        $(install_button).on('click',function() {
            $(this).addClass('disabled loading');
            var name = $(this).attr('name');
            self.install(name);
        });
    };

    this.install = function(name) {
        var name_param = '';
        if (isEmpty(name) == false) {
            name_param = '/' + name;
        }
        arikaim.put('/admin/api/modules/install' + name_param,null,function(result) {
            if (isEmpty(name) == false) {
                arikaim.page.loadContent({
                    id: name,
                    params: { name: name },
                    component: 'system:admin.system.modules.module',
                    replace: true
                },function() {
                    if (isObject(modules) == true) {
                        modules.init();
                    }
                });
            } else {
                arikaim.page.loadContent({
                    id: 'tab_content',
                    component: 'system:admin.system.modules'
                });
            }
            $(install_button).removeClass('disabled loading');
        },function (errors) {
            $(install_button).removeClass('disabled loading');
        });
    };
}

var modules = new CoreModules();

arikaim.page.onReady(function() {
    modules.init();
});
