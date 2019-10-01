/**
 *  Arikaim
 *  @version    1.0  
 *  @copyright  Copyright (c) Konstantin Atanasov <info@arikaim.com>
 *  @license    http://www.arikaim.com/license.html
 *  http://www.arikaim.com
 * 
 */

arikaim.page.onReady(function() {
    $('.accordion').accordion();
    arikaim.ui.form.addRules("#user_settings_form",{
        inline: false,
        fields: {
            user_name: ['minLength[2]']
        }
    });

    arikaim.ui.form.onSubmit('#user_settings_form',function() {
        return arikaim.post('/core/api/user/','#user_settings_form');
    },function(result) {       
        arikaim.ui.form.showMessage(result.message);       
    }); 
});