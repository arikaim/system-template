/**
 *  Arikaim
 *  @copyright  Copyright (c) Konstantin Atanasov <info@arikaim.com>
 *  @license    http://www.arikaim.com/license
 *  http://www.arikaim.com
 */
'use strict';

function CoreModules() {
    var self = this;

    this.init = function() {
        arikaim.ui.tab('.tab-item','tab_content',['type']);
    };

    this.loadModuleDetails = function(name, onSuccess, onError) {      
        return arikaim.page.loadContent({
            id: name,
            params: { module_name: name },
            component: 'system:admin.modules.module',
            replace: true
        },onSuccess,onError);
    };
}

var modules = new CoreModules();

arikaim.component.onLoaded(function() {  
    modules.init();
});
