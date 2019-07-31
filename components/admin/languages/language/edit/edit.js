/**
 *  Arikaim
 *  @version    1.0  
 *  @copyright  Copyright (c) Konstantin Atanasov <info@arikaim.com>
 *  @license    http://www.arikaim.com/license.html
 *  http://www.arikaim.com
 * 
 */

arikaim.page.onReady(function() {
    $('#language_dropdown').dropdown({
        onChange: function(uuid) {
            languages.load(uuid);
            arikaim.ui.form.clearErrors('#language_form');
        }
    });    
});
