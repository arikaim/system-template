/**
 *  Arikaim
 *  http://www.arikaim.com
 *  @copyright  Copyright (c) Konstantin Atanasov   <info@arikaim.com>
 *  @license    http://www.arikaim.com/license
 *  
 */
'use strict';

function Templates() { 

    this.showDetailsPage = function(name) {
        arikaim.page.loadContent({
            id : 'tab_content',
            component : 'system:admin.templates.template.details',
            params: { 
                template_name: name 
            }
        },function(result) {            
        });
    };
}

var templates = new Templates();
