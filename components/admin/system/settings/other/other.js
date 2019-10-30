/**
 *  Arikaim
 *  
 *  @copyright  Copyright (c) Konstantin Atanasov <info@arikaim.com>
 *  @license    http://www.arikaim.com/license.html
 *  http://www.arikaim.com
 * 
 */

$(document).ready(function() {
    $('#debug_toggle').checkbox({
        onChecked: function() {
            settings.setDebug(true);         
        },
        onUnchecked: function() {
            settings.setDebug(false);         
        }
    }); 
});
