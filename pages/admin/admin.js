/**
 *  Arikaim
 *  @version    1.0  
 *  @copyright  Copyright (c) Konstantin Atanasov <info@arikaim.com>
 *  @license    http://www.arikaim.com/license.html
 *  http://www.arikaim.com
 * 
 */

function ControlPanel() {
    var tab_item_class = '.tab-item';
    var page_icon_element = '#page_icon';
    var page_title_element = '#page_title';

    this.setPageIcon = function(icon_class) {       
        $(page_icon_element).removeClass();
        $(page_icon_element).addClass('mini icon blue ' + icon_class);
    };

    this.setPageTitle = function(title) { 
        $(page_title_element).html(title);
    };    

    this.initTabItems = function(item_class,params) {
        if (isEmpty(item_class) == true) {
            item_class = tab_item_class;
        }
        if (isEmpty(params) == true) {
            params = {};
        }
        $(item_class).off();
        $(item_class).on('click',function() {              
            $(item_class).removeClass('active');
            $(this).addClass('active');
            var component_name = $(this).attr('component');
            arikaim.page.loadContent({
                id: 'tab_content',
                params: params,
                component: component_name
            });   
        });   
    };
    
    this.setActiveTab = function(element_id,item_class) {
        if (isEmpty(item_class) == true) {
            item_class = tab_item_class;
        }
        $(item_class).removeClass('active');
        $(element_id).addClass('active');
    };

    this.initCancelButton = function(component_name,params,button_element) {
        if (isEmpty(button_element) == true) {
            button_element = '.cancel-button'
        }
        if (isEmpty(params) == true) {
            params = {};
        }
        $(button_element).off();
        $(button_element).on('click',function() {
            $(tab_item_class).removeClass('active');
            $('#view_button').addClass('active');
            arikaim.page.loadContent({
                id: 'tab_content',    
                params: params,        
                component: component_name
            });
            return false;
        });
    }; 
}

var controlPanel = new ControlPanel();

arikaim.page.onReady(function() {      
    arikaim.session.init();
});