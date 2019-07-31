/**
 *  Arikaim
 *  @version    1.0  
 *  @copyright  Copyright (c) Konstantin Atanasov <info@arikaim.com>
 *  @license    http://www.arikaim.com/license.html
 *  http://www.arikaim.com
 * 
 */

 function TemplatesView() { 
    var self = this;

    this.init = function() {
        var current_button  = '.set-current-button';
        var details_button  = '.details-button';
        var update_button   = '.update-button';
    
        arikaim.ui.button(current_button,function(element) {  
            var name = $(element).attr('template');
                    
            return templates.setCurrent(name).done(function(result) {
                $('.current-template').remove();
                $(current_button).show();
                $(update_button).hide();
                arikaim.page.loadContent({
                    id: name,
                    params: { template_name: name },
                    component: 'system:admin.templates.template',
                    replace: true
                },function(result) {
                    self.init();
                });  
            });
        });
    
        arikaim.ui.button(update_button,function(element) {  
            var name = $(element).attr('template');   
          
            return templates.setCurrent(name).done(function(result) {
                arikaim.page.loadContent({
                    id: name,
                    params: { template_name: name },
                    component: 'system:admin.templates.template',
                    replace: true
                },function(result) {
                    self.init();
                });               
            });
        });
    
        arikaim.ui.button(details_button,function(element) {  
            var name = $(element).attr('template');          
            templates.showDetailsPage(name);
            return true;
        });
    };
}

var templates_view = new TemplatesView();

arikaim.page.onReady(function() {    
    templates_view.init();
});