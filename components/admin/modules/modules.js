/**
 *  Arikaim
 *  @copyright  Copyright (c) Konstantin Atanasov <info@arikaim.com>
 *  @license    http://www.arikaim.com/license
 *  http://www.arikaim.com
 */
'use strict';

function CoreModules() {
    var self = this;

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

