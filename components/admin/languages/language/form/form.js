/**
 *  Arikaim
 *  @version    1.0  
 *  @copyright  Copyright (c) Konstantin Atanasov <info@arikaim.com>
 *  @license    http://www.arikaim.com/license.html
 *  http://www.arikaim.com
 * 
 */

arikaim.page.onReady(function() {
    $('#country_code').dropdown();
   
    arikaim.ui.form.addRules("#language_form",{
        inline: false,
        fields: {
            code: {
                rules: [{ type:'exactLength[2]' }]
            },
            code_3: {
                rules: [{ type: 'exactLength[3]' }]
            },
            title: {
                rules: [{
                    type: "empty"     
                }]
            },
            country_code: {
                rules: [{
                    type: "empty"            
                }]
            }
        }
    });
    
    arikaim.ui.form.onSubmit('#language_form',function(data) {      
        return arikaim.post('/core/api/language/','#language_form');
    }).done(function(data) {
        $('#view_button').click();
        languages.loadMenu();
    });
});