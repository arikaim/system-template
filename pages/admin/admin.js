/**
 *  Arikaim
 *  @version    1.0  
 *  @copyright  Copyright (c) Konstantin Atanasov <info@arikaim.com>
 *  @license    http://www.arikaim.com/license.html
 *  http://www.arikaim.com
 * 
 */

function ControlPanel() {

    this.setPageIcon = function(icon_class, selector) {     
        selector = getDefaultValue(selector,'#page_icon');
        $(selector).removeClass();
        $(selector).addClass('mini icon blue ' + icon_class);
    };

    this.setPageTitle = function(title, selector) { 
        selector = getDefaultValue(selector,'#page_title');
        $(selector).html(title);
    };
}

var controlPanel = new ControlPanel();
