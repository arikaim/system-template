/**
 *  Arikaim
 *  @copyright  Copyright (c) Konstantin Atanasov   <info@arikaim.com>
 *  @license    http://www.arikaim.com/license
 *  http://www.arikaim.com
 */
'use strict';

function Extensions() {
    
    this.showDetails = function(name) {      
        arikaim.page.loadContent({
            id: 'tab_content',
            component: 'system:admin.extensions.extension.details',
            params: { 
                extension: name 
            }
        });   
    };
}

var extensions = new Extensions();
