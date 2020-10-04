/**
 *  Arikaim  
 *  @copyright  Copyright (c) Konstantin Atanasov   <info@arikaim.com>
 *  @license    http://www.arikaim.com/license
 *  http://www.arikaim.com
 */
"use strict";

function Install() {
    var self = this;
    this.status = false;
    this.step = 1;
  
    this.install = function(formId, onSuccess, onError) {
        return arikaim.post('/core/api/install/',formId,onSuccess,onError);
    };

    this.installExtensions = function(onSuccess, onError) {
        return arikaim.put('/core/api/install/extensions',{},onSuccess,onError);
    };

    this.installModules = function(onSuccess, onError) {
        return arikaim.put('/core/api/install/modules',{},onSuccess,onError);
    };

    this.postInstallActions = function(onSuccess, onError) {
        return arikaim.put('/core/api/install/actions',{},onSuccess,onError);
    };

    this.repair = function(onSuccess, onError) {
        return arikaim.put('/core/api/install/repair',null,onSuccess,onError);
    };

    this.initInstallForm = function() {
        arikaim.ui.form.addRules("#install_form",{
            inline: false,
            fields: {
                database: {
                    rules: [{ type: "minLength[3]" }]
                },
                username: {
                    rules: [{ type: "minLength[3]" }]
                },
                password: {
                    rules: [{ type: "minLength[3]" }]
                }
            }
        });
    };

    this.init = function() {
        this.step = 1;
    
        progressBar.hide(true);
        $('#continue_button').hide();      
        
        arikaim.ui.button('#continue_button',function() {
            return arikaim.loadUrl('/admin',true); 
        });
    };

    this.showError = function(error) {
        progressBar.reset();
        progressBar.hide(true);
        $('#continue_button').hide();
        $('.install-button').show();
        this.status = false;      
    }

    this.showComplete = function(message) {
        progressBar.reset();
        progressBar.hide(true);
        $('.install-button').hide();      
        arikaim.ui.form.showMessage({
            selector: '#message',
            hide: 0,
            message: message
        });
        arikaim.ui.form.disable('#install_form');
        $('#continue').removeClass('hidden');
        $('#continue').show();
        $('#continue_button').show();

        this.status = true;
    }
}

var install = new Install();
