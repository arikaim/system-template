/**
 *  Arikaim
 *  @version    1.0  
 *  @copyright  Copyright (c) Konstantin Atanasov <info@arikaim.com>
 *  @license    http://www.arikaim.com/license.html
 *  http://www.arikaim.com
 * 
 */

arikaim.page.onReady(function() {    
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
            $(this).removeClass('disabled loading');       
        });
    });

    $(update_button).off(); 
    $(update_button).on('click',function() {  
        var name = $(this).attr('template');   
        $(this).addClass('disabled loading');       
        templates.setCurrent(name,function(result) {
            $(this).removeClass('disabled loading');       
        });
    });

    $(details_button).off();
    $(details_button).on('click',function() {  
        var name = $(this).attr('template');          
        templates.showDetailsPage(name);
    });
});