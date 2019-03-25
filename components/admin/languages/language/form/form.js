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
    controlPanel.initCancelButton('system:admin.languages.view');
    
    arikaim.form.addRules("#language_form",{
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
      
    arikaim.form.onSubmit('#language_form',function() {
        $('#save_language_button').addClass('disabled loading');
        arikaim.post('/core/api/language/','#language_form',function(result) {
            $('#save_language_button').removeClass('disabled loading');
            $('#view_button').click();
            languages.loadMenu();
        },function(errors) {
            $('#save_language_button').removeClass('disabled loading');
            arikaim.form.showErrors(errors,'.form-errors');
            arikaim.form.addFieldErrors('#language_form',errors);
        });  
    });
});