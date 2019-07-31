/**
 *  Arikaim
 *  @version    1.0  
 *  @copyright  Copyright (c) Konstantin Atanasov <info@arikaim.com>
 *  @license    http://www.arikaim.com/license.html
 *  http://www.arikaim.com
 * 
 */

function Languages() {
    var self = this;

    this.delete = function(uuid,onSuccess,onError) {        
        return arikaim.delete('/core/api/language/' + uuid,onSuccess,onError); 
    };
    
    this.setDefault = function(uuid,onSuccess,onError) {
        return arikaim.put('/core/api/language/default/'+ uuid,null,onSuccess,onError);        
    };

    this.loadMenu = function(menu_element) {
        if (isEmpty(menu_element) == true) {
            var menu_element = "language-menu";
        }
        arikaim.page.loadContent({
            id : menu_element,
            component : 'system:language.dropdown'
        });
    };

    /**
     * 
     * @param string uuid 
     * @param int status  0 - disabled, 1 - active, 2 - default
     */
    this.setStatus = function(uuid,status,onSuccess,onError) {     
        var status_text = isEmpty(status) ? 'toggle' : status;         
        return arikaim.put('/core/api/language/status/'+ uuid + '/' + status_text,null,onSuccess,onError);      
    };

    this.load = function(uuid) {
        arikaim.page.loadContent({
            id : 'form_content',
            component : 'system:admin.languages.language.form',
            params: { uuid: uuid },
            loader : false
        });
    };

    this.edit = function(uuid) {       
        arikaim.ui.setActiveTab('#edit_button');
        arikaim.page.loadContent({
            id: 'tab_content',
            component: 'system:admin.languages.language.edit',
            params: { uuid: uuid }
        });  
    };
    
    this.init = function() {
        arikaim.ui.tab();
    };
}

var languages = new Languages();

arikaim.page.onReady(function() {
    languages.init();
});