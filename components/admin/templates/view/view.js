/**
 *  Arikaim
 *  @copyright  Copyright (c) Konstantin Atanasov <info@arikaim.com>
 *  @license    http://www.arikaim.com/license
 *  http://www.arikaim.com
 */
'use strict';

 function TemplatesView() { 
    var self = this;

    this.showImagePreview = function(options) {
        imagePreviewModal.show(options);         
    };

    this.initRows = function() {       
    
        arikaim.ui.setEmptyImageOnError('.template-image',function(image) {
            $(image).remove();
        });

        arikaim.ui.button('.set-primary',function(element) {  
            var name = $(element).attr('template');
                    
            return packages.setPrimary(name,'template',function(result) {
                var message = result.message;
                $('.primary-label').remove();
                $(this).addClass('disabled grey');
                $('.set-primary').removeClass('disabled grey');

                arikaim.page.loadContent({
                    id: name,
                    params: { template_name: name },
                    component: 'system:admin.templates.template',
                    replace: true
                },function(result) {
                    self.initRows();
                    arikaim.ui.form.showMessage({
                        selector: '#message_' + name,
                        message: message
                    });
                });  
            },function(error) {
                arikaim.ui.form.showMessage({
                    selector: '#message_' + name,
                    message: error
                });
            });
        });
    
        arikaim.ui.button('.update-button',function(element) {  
            var name = $(element).attr('template');   
          
            return packages.update(name,'template',function(result) {
                var mesasge = result.message;
                arikaim.page.loadContent({
                    id: name,
                    params: { template_name: name },
                    component: 'system:admin.templates.template',
                    replace: true
                },function(result) {
                    self.initRows();   
                    arikaim.ui.form.showMessage({
                        selector: '#message_' + name,
                        message: mesasge
                    });                 
                });               
            },function(error) {
                arikaim.ui.form.showMessage({
                    selector: '#message_' + name,
                    message: error
                });
            });
        });
    
        arikaim.ui.button('.details-button',function(element) {  
            var name = $(element).attr('template');          
            templates.showDetailsPage(name);
            
            return true;
        });

        arikaim.ui.button('.image-preview-button',function(element) {  
            var image = $(element).attr('data-src');
            self.showImagePreview({
                images: [image],
                hideTitle: true
            });
            
            return true;
        });
    };
}

var templatesView = new TemplatesView();

arikaim.component.onLoaded(function() {    
    templatesView.initRows();
});