/**
 *  Arikaim
 *  @copyright  Copyright (c) Konstantin Atanasov <info@arikaim.com>
 *  @license    http://www.arikaim.com/license
 *  http://www.arikaim.com
 */
'use strict';

function LanguagesView() {
    var self = this;

    this.init = function() {
        this.loadMessages('system:admin.languages');
        arikaim.ui.loadComponentButton('.add-language');
    
        this.initRows();
    };

    this.initRows = function() {
        arikaim.ui.button('.remove-button', function(element) {
            var language = $(element).attr('language-title');
            var uuid = $(element).attr('uuid');
            var message = arikaim.ui.template.render(self.getMessage('description'),{ title: language });
            
            arikaim.ui.getComponent('confirm_delete').open(function() {
                return languages.delete(uuid).done(function(result) {
                    $('#view_button').click();
                    $('row_' + result.uuid).remove();               
                });
            },message);
        });
        
        arikaim.ui.button('.edit-button',function(element) {
            return arikaim.page.loadContent({
                id: 'language_details',
                component: 'system:admin.languages.edit',
                params: { 
                    uuid: $(element).attr('uuid') 
                }
            });           
        });
    
        arikaim.ui.button('.change-status-button',function(element) {             
            var uuid = $(element).attr('uuid');
            return languages.setStatus(uuid,'toggle');  
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

var languagesView = createObject(LanguagesView,ControlPanelView);

arikaim.component.onLoaded(function() {    
    languagesView.init();
});
