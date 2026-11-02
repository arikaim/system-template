/**
 *  Arikaim
 *  @copyright  Copyright (c) Intersoft Ltd <info@arikaim.com>
 *  @license    http://www.arikaim.com/license
 *  http://www.arikaim.com
 */
'use strict';

function Orm() {
    
    this.loadModel = function(selector, name, extension, uuid) {
        return arikaim.page.loadContent({
            id: selector,
            component: 'system:admin.orm.model',
            params: { 
                name: name,
                extension: extension,
                uuid: uuid 
            }
        });  
    }
}

var orm = new Orm();
