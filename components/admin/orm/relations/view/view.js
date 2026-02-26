/**
 *  Arikaim
 *  @copyright  Copyright (c) Konstantin Atanasov <info@arikaim.com>
 *  @license    http://www.arikaim.com/license
 *  http://www.arikaim.com
 */
'use strict';

function RelationsView() {
    var self = this;  
  
    this.init = function() {      
        this.loadMessages('system:admin.orm.relations.view');
    };

    this.initRows = function() {
        arikaim.ui.button('.model-info',function(element) {
            var uuid = $(element).attr('uuid');
            var title = $(element).attr('data-title');
            var type = $(element).attr('type');
            var extension = $(element).attr('extension');

            arikaim.ui.getComponent('modal_info').open({
                title: title,
                component: {
                    name: 'system:admin.orm.model',
                    params: { 
                        uuid: uuid, 
                        extension: extension,
                        type: type 
                    }
                }
            });
        });

        arikaim.ui.button('.delete-relation',function(element) {                    
            var uuid = $(element).attr('uuid');
            var title = $(element).attr('data-title');
            var model = $(element).attr('model');
            var extension = $(element).attr('extension');
            var message = arikaim.ui.template.render(self.getMessage('remove.description'),{ title: title });
           
            arikaim.ui.getComponent('confirm_delete_relation').open(
            function() {
                relations.delete(model,extension,uuid,
                function(result) {
                    arikaim.ui.table.removeRow('#' + uuid);        
                });
            },message);
        });
    };
}

var relationsView = createObject(RelationsView,ControlPanelView);

arikaim.component.onLoaded(function() {    
    relationsView.init();
}); 
