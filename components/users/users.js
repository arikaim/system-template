/**
 *  Arikaim  
 *  @copyright  Copyright (c) Intersoft Ltd <info@arikaim.com>
 *  @license    http://www.arikaim.com/license
 *  http://www.arikaim.com
 */
'use strict';

function Users() {
    this.self = this;
    this.onLogin = null;

    var loginAttempts = 0;
    
    this.deleteAvatar = function(onSuccess, onError) {
        return arikaim.delete('/api/users/avatar/delete',onSuccess,onError);          
    };

    this.changeProfilePassword = function(formId, onSuccess, onError) {
        var formId = getDefaultValue(formId,'#change_password_form');

        return arikaim.put('/api/users/profile/change-password',formId,onSuccess,onError);
    };

    this.changePassword = function(formId, onSuccess, onError) {
        var formId = getDefaultValue(formId,'#change_password_form');

        return arikaim.put('/api/users/change-password',formId,onSuccess,onError);
    };

    this.resetPassword = function(formId, onSuccess, onError) {
        var formId = getDefaultValue(formId,'#reset_password_form'); 

        return arikaim.put('/api/users/reset-password',formId,onSuccess,onError);
    };
   
    this.signup = function(formId, onSuccess, onError) {   
        var formId = getDefaultValue(formId,'#signup_form'); 
      
        return arikaim.post('/api/users/signup',formId,onSuccess,onError);
    };

    this.changeDetails = function(formId, onSuccess, onError) {
        var formId = getDefaultValue(formId,'#details_form'); 
     
        return arikaim.put('/api/users/update',formId,onSuccess,onError);
    };

    this.login = function(formId, onSuccess, onError) {
        var formId = getDefaultValue(formId,'#login_form'); 
       
        return arikaim.post('/api/users/login',formId,onSuccess,function(errors) {
            loginAttempts++;
            callFunction(onError,errors);
        });
    };

    this.logout = function(onSuccess, onError) {
        loginAttempts = 0;
        return arikaim.get('/api/users/logout',onSuccess,onError);
    };

    this.getLoginAttempts = function() {
        return loginAttempts;
    };

    this.sendConfirmEmail = function(token,onSuccess,onError) {
        return arikaim.put('/api/users/confirm/email',{ token: token },onSuccess,onError);
    };
}

var users = new Users();
