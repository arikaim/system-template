/**
 *  Arikaim
 *  http://www.arikaim.com
 *  @copyright  Copyright (c) Konstantin Atanasov   <info@arikaim.com>
 *  @license    http://www.arikaim.com/license.html
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
            controlPanel.setActiveTab('#details_button');
        });
    };

    this.init = function() {
       controlPanel.initTabItems();
    };

    this.install = function(name,onSuccess) {
        arikaim.put('/core/api/template/install/' + name,null,function(result) {
            callFunction(onSuccess,result);           
        });
    };

    this.setCurrent = function(name,onSuccess) {
        arikaim.put('/core/api/template/current/' + name,null,function(result) {
            callFunction(onSuccess,result);
        });
    };
}

var templates = new Templates();

arikaim.page.onReady(function() {
    templates.init();   
});