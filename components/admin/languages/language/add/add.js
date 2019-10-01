/**
 *  Arikaim
 *  @version    1.0  
 *  @copyright  Copyright (c) Konstantin Atanasov <info@arikaim.com>
 *  @license    http://www.arikaim.com/license.html
 *  http://www.arikaim.com
 * 
 */

arikaim.page.onReady(function() {

    var languages_list;

    arikaim.component.load('components:language',function(result) {
        languages_list = arikaim.component.get('components:language');
    });
   
    $('#languages_list').dropdown({
        onChange: function(code) {
            arikaim.ui.form.clearErrors('#language_form');
            var language = languages_list.getProperty(code);
            $('#code').val(language.code);
            $('#code_3').val(language.code_3);
            $('#title').val(language.title);
            $('#native_title').val(language.native_title);
            if (isEmpty(language.country_code) == false) {
                $('#country_code').dropdown('set selected',language.country_code.toLowerCase());
            }
        }
    });  

    arikaim.ui.form.onSubmit('#language_form',function(data) {      
        return arikaim.post('/core/api/language/add','#language_form');
    },function(result) {
        arikaim.ui.form.showMessage(result.message);
        arikaim.ui.form.clear('#language_form');
        languages.loadMenu();
    },function(error) {
        arikaim.ui.form.showMessage(error);
    });
});