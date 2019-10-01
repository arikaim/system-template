/**
 *  Arikaim
 *  @version    1.0  
 *  @copyright  Copyright (c) Konstantin Atanasov <info@arikaim.com>
 *  @license    http://www.arikaim.com/license.html
 *  http://www.arikaim.com
 * 
 */

function LanguagesView() {
    var self = this;

    this.init = function() {
        var component = arikaim.component.get('system:admin.languages');
        var remove_message = component.getProperty('message.description');
        var message_title = component.getProperty('message.title');

        var start_index = null;
        var end_index = null;
        var items = [];

        $('#languages_list').sortable({        
            opacity: 0.8,
            cursor: "move",
            distance: 10,   
            create: function(event, ui) {
                items = $("#languages_list").sortable("toArray");    
            },
            start: function(event, ui) { 
                start_index = ui.item.index();  
            },   
            stop: function(event, ui) {
                end_index = ui.item.index();

                var uuid = items[start_index];
                var target_uuid = items[end_index];

                if (uuid != target_uuid) {
                    position.shift("Language",uuid,target_uuid,function(result) {
                        languages.loadMenu();
                    });     
                }
            }
        });
    
        arikaim.ui.button('.remove-button', function(element) {
            var language = $(element).attr('language-title');
            var uuid = $(element).attr('uuid');
            var message = arikaim.ui.template.render(remove_message,{ title: language });
            
            modal.confirmDelete({
                    title: message_title,  
                    description: message,
                    uuid: uuid
            }).done(function(params) {
                return languages.delete(params.uuid).done(function(result) {
                    $('#view_button').click();
                    languages.loadMenu();
                });
            });        
        });
        
        arikaim.ui.button('.edit-button',function(element) {
            var uuid = $(element).attr('uuid');
            arikaim.ui.setActiveTab('#edit_button');
            return arikaim.page.loadContent({
                id: 'tab_content',
                component: 'system:admin.languages.language.edit',
                params: { uuid: uuid }
            });           
        });
    
        arikaim.ui.button('.change-status-button',function(element) {             
            var uuid = $(element).attr('uuid');
            return languages.setStatus(uuid,'toggle').done(function(result) {
                if (result.status == 1) {
                    $('#' + uuid).addClass('green');
                } else {
                    $('#' + uuid).removeClass('green');
                }
                languages.loadMenu();
            }).fail(function(error) {
                console.log(error);
            });  
        });
        
        arikaim.ui.button('.set-default-button',function(element) {
            var uuid = $(element).attr('uuid');            
            $('.default-language').hide();

            return languages.setDefault(uuid).done(function(result) {           
                $('#'+ uuid).find('.default-language').removeClass('hidden').show();    
                $('#view_button').click();  
            }).fail(function(error) {
                console.log(error);
            });        
        });
    }
}

var languagesView = new LanguagesView();

arikaim.page.onReady(function() {    
    languagesView.init();
});
