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
            languages.load(uuid,function(result) {
                arikaim.ui.form.clearErrors('#language_form');
                initEditLanguageForm();
            });
           
        }
    });    

    function initEditLanguageForm() {
        arikaim.ui.form.onSubmit('#language_form',function(data) {      
            return arikaim.put('/core/api/language/update','#language_form');
        },function(result) {
            arikaim.ui.form.showMessage(result.message);
            languages.loadMenu();
        },function(error) {
            arikaim.ui.form.showMessage(error);
        });
    }

    initEditLanguageForm();
});
