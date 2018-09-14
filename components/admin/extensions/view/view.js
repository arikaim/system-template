/**
 *  Arikaim
 *  @version    1.0  
 *  @copyright  Copyright (c) Konstantin Atanasov <info@arikaim.com>
 *  @license    http://www.arikaim.com/license.html
 *  http://www.arikaim.com
 * 
 */

arikaim.page.onReady(function() {   
    var component = arikaim.getComponent('system:admin.extensions');
    var uninstall_message = component.getProperty('message.description');
    var message_title = component.getProperty('message.title');

    $('.popup-button').popup({ 
        on: 'click' 
    });

    $('.details-button').off();
    $('.details-button').on('click',function() {     
        var name = $(this).attr('extension');        
        extensions.showDetails(name);
    });
    
    $('.install-button').off();
    $('.install-button').on('click',function() {             
        var name = $(this).attr('extension');
        extensions.install(name);        
    });
    
    $('.un-install-button').off();
    $('.un-install-button').on('click',function() {             
        var name = $(this).attr('extension');
        var message = arikaim.template.render(uninstall_message,{ title: name })
        confirmDialog.show({
            title: message_title,
            description: message
        },function() {
            extensions.unInstall(name);
        });
    });
    
    $('.change-status-button').off();
    $('.change-status-button').on('click',function() {             
        var name = $(this).attr('extension');
        extensions.changeStatus(name);
    }); 
});