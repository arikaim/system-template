/**
 *  Arikaim
 *  @version    1.0  
 *  @copyright  Copyright (c) Konstantin Atanasov <info@arikaim.com>
 *  @license    http://www.arikaim.com/license.html
 *  http://www.arikaim.com
 * 
 */

function ControlPanelUser() {
    
    var form_element = '#login_form';

    this.isLoged = function() {
        return arikaim.isValidToken();
    };

    this.login = function(onSuccess,onError) {
        arikaim.post('/admin/api/user/login/',form_element,function(result) {
            if (isEmpty(result) == false) {
                callFunction(onSuccess,result);  
                arikaim.setToken(result);        
                arikaim.page.showLoader('#content');
                arikaim.page.reload();         
            } else {
                arikaim.form.showErrors(errors,'.form-errors');     
                callFunction(onError,result);  
            }     
        },function (errors) {
            arikaim.form.showErrors(errors,'.form-errors');     
            callFunction(onError,errors);  
        },"session");
    };

    this.logout = function() {      
        arikaim.get('/admin/api/user/logout/',function(result) {         
            arikaim.clearToken();
            arikaim.page.reload();           
        },function(errors) {
            return false;
        },
        "session");     
    };
};

var controlPanelUser = new ControlPanelUser();