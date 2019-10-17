/**
 *  Arikaim
 *  @version    1.0  
 *  @copyright  Copyright (c) Konstantin Atanasov <info@arikaim.com>
 *  @license    http://www.arikaim.com/license.html
 *  http://www.arikaim.com
 * 
 */

function Relations() {
    var self = this;

    this.delete = function(data, onSuccess, onError) {       
        return arikaim.put('/core/api/orm/relation/delete',data,onSuccess,onError);          
    };

    this.add = function(data, onSuccess, onError) {       
        return arikaim.post('/core/api/orm/relation',data,onSuccess,onError);          
    };

    this.init = function() {
        var extension = $('#relation_rows').attr('extension');
        var model = $('#relation_rows').attr('model');
        var relation_id = $('#relation_rows').attr('relation-id');
        
        paginator.init('relation_rows',{ 
            name: 'system:admin.orm.relations.rows',
            params: {  
                extension: extension,
                model: model,
                relation_id: relation_id
            } 
        },'relations');  
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
            var component = arikaim.component.get('system:admin.orm.relations');
            var remove_message = component.getProperty('messages.remove.description');

            var uuid = $(element).attr('uuid');
            var title = $(element).attr('data-title');
            var model = $(element).attr('model');
            var extension = $(element).attr('extension');
            var message = arikaim.ui.template.render(remove_message,{ title: title });
        
            modal.confirmDelete({ 
                title: component.getProperty('messages.remove.title'),
                description: message
            },function() {
                relations.delete({
                    model: model,   
                    extension: extension,
                    uuid: uuid
                },function(result) {
                    $('#' + uuid).remove();           
                });
            });
        });
    };
}

var relations = new Relations();

$(document).ready(function() {  
    relations.init();
}); 