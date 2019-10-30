/**
 *  Arikaim
 *  http://www.arikaim.com
 *  @copyright  Copyright (c) Konstantin Atanasov   <info@arikaim.com>
 *  @license    http://www.arikaim.com/license
 *  
 */

function Templates() { 
    var self = this;
   
    this.showDetailsPage = function(name) {
        arikaim.page.loadContent({
            id : 'tab_content',
            component : 'system:admin.templates.template.details',
            params: { 'template_name': name }
        },function(result) {
            $('#templates_details_tab .item').tab();
            arikaim.ui.setActiveTab('#details_button');
        });
    };

    this.init = function() {     
       arikaim.ui.tab();
    };

    this.update = function(name, onSuccess, onError) {
        var data = {
            name: name
        };
        return arikaim.put('/core/api/template/update',data,onSuccess,onError);          
    };

    this.setCurrent = function(name, onSuccess, onError) {
        var data = {
            name: name
        };
        return arikaim.put('/core/api/template/current',data,onSuccess,onError);         
    };
}

var templates = new Templates();

arikaim.page.onReady(function() {
    templates.init();   
});