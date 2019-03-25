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
    
        $('.popup-button').popup({
            on: 'click'
        });
    
        $(current_button).off();    
        $(current_button).on('click',function() {  
            var name = $(this).attr('template');
            $(this).addClass('disabled loading');            
            templates.setCurrent(name,function(result) {
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
                $(this).removeClass('disabled loading');       
            });
        });
    
        $(update_button).off(); 
        $(update_button).on('click',function() {  
            var name = $(this).attr('template');   
            $(this).addClass('disabled loading');       
            templates.setCurrent(name,function(result) {
                arikaim.page.loadContent({
                    id: name,
                    params: { template_name: name },
                    component: 'system:admin.templates.template',
                    replace: true
                },function(result) {
                    self.init();
                });
                $(this).removeClass('disabled loading'); 
            });
        });
    
        $(details_button).off();
        $(details_button).on('click',function() {  
            var name = $(this).attr('template');          
            templates.showDetailsPage(name);
        });
    };
}

var templates_view = new TemplatesView();

arikaim.page.onReady(function() {    
    templates_view.init();
});