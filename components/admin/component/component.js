/**
 *  Arikaim
 *  http://www.arikaim.com
 *  @copyright  Copyright (c) Konstantin Atanasov   <info@arikaim.com>
 *  @license    http://www.arikaim.com/license.html
 *  
 */

arikaim.page.onReady(function() {
    $('.components-list').accordion({
        onOpen: function(item) {
            var component_name = $(this).attr('component-name');
            var element_id = $(this).attr('id');
            var extension = getDefaultValue($(this).attr('extension'),'');
            var template = getDefaultValue($(this).attr('template'),'');

            arikaim.page.loadContent({
                id: element_id,
                component: 'system:admin.component.details',
                params: { 
                    component: component_name,
                    extension: extension,
                    template: template  
                }
            });
        },
        onOpening: function(item) {
            var element_id = $(this).attr('id');
            $('#' + element_id).html("");
        }
    });
});
