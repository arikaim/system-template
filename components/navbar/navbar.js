/**
 *  Arikaim
 *  @version    1.0  
 *  @copyright  Copyright (c) Konstantin Atanasov <info@arikaim.com>
 *  @license    http://www.arikaim.com/license.html
 *  http://www.arikaim.com
 * 
 */

$(document).ready(function() {
    $('#language_dropdown').dropdown({
        onChange: function(value) {               
            arikaim.setLanguage(value);
        }
    });
});