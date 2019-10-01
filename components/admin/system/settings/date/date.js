/**
 *  Arikaim
 *  @version    1.0  
 *  @copyright  Copyright (c) Konstantin Atanasov <info@arikaim.com>
 *  @license    http://www.arikaim.com/license.html
 *  http://www.arikaim.com
 * 
 */

$(document).ready(function() {
  
    $('#time_zone').dropdown({
        onChange: function(value, text, choice) {                 
            options.save('time.zone',value);
        }
    });

    $('#date_format').dropdown({
        onChange: function(value) {          
            options.save('date.format',value);
        }
    });

    $('#time_format').dropdown({
        onChange: function(value) {          
            options.save('time.format',value);
        }
    });
});