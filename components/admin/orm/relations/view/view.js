/**
 *  Arikaim
 *  @copyright  Copyright (c) Konstantin Atanasov <info@arikaim.com>
 *  @license    http://www.arikaim.com/license
 *  http://www.arikaim.com
 */
'use strict';

function RelationsView() {
    var self = this;  
    this.messages = null;

    this.init = function() {
        var extension = $('#relation_rows').attr('extension');
        var model = $('#relation_rows').attr('model');
        var relationId = $('#relation_rows').attr('relation-id');
        
        this.loadMessages();

        paginator.init('relation_rows',{ 
            name: 'system:admin.orm.relations.view.rows',
            params: {  
                extension: extension,
                model: model,
                relation_id: relationId
            } 
        },'relations');  
    };

    this.loadMessages = function() {
        if (isObject(this.messages) == true) {
            return;
        }

        arikaim.component.loadProperties('system:admin.orm.relations.view',function(params) { 
            self.messages = params.messages;
        }); 
    };

    this.initRows = function() {
        arikaim.ui.button('.model-info',function(element) {
            var uuid = $(element).attr('uuid');
            var title = $(element).attr('data-title');
            var type = $(element).attr('type');

            modal.alert({
                title: title,
                icon: 'database',
                component: {
                    name: 'system:admin.orm.model',
                    params: { uuid: uuid, type: type }
                }
            });
        });

        arikaim.ui.button('.delete-relation',function(element) {                    
            var uuid = $(element).attr('uuid');
            var title = $(element).attr('data-title');
            var model = $(element).attr('model');
            var extension = $(element).attr('extension');
            var message = arikaim.ui.template.render(self.messages.remove.description,{ title: title });
           
            modal.confirmDelete({ 
                title: self.messages.remove.title,
                description: message
            },function() {
                relations.delete(model,extension,uuid,
                function(result) {
                    arikaim.ui.table.removeRow('#' + uuid);        
                });
            });
        });
    };
}

var relationsView = new RelationsView();

$(document).ready(function() {  
    relationsView.init();
}); 
