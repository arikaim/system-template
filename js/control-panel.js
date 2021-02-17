/**
 *  Arikaim
 *  @copyright  Copyright (c) Konstantin Atanasov <info@arikaim.com>
 *  @license    http://www.arikaim.com/license
 *  http://www.arikaim.com
 */
'use strict';

function ControlPanelView() {
    var self = this;
    var messagesComponentName = null;

    this.messages = null;
    
    this.setMessagesComponent = function(name) {
        messagesComponentName = name;
    };

    this.getMessage = function(key) {
        if (isObject(this.messages) == false) {
            this.loadMessages(null,function(messages) {              
                return getValue(key,messages,'');
            });
        }
      
        return getValue(key,this.messages,'');
    };

    this.loadMessages = function(componentName, onSuccess) {
        if (isObject(this.messages) == true) {
            callFunction(onSuccess,this.messages);
            return;
        }
        componentName = getDefaultValue(componentName,messagesComponentName);

        arikaim.component.loadProperties(componentName,function(params) { 
            self.messages = params.messages;
            callFunction(onSuccess,params.messages);
        }); 
    };

    this.init = function() {};
    this.initRows = function() {};
    this.loadRows = function() {};
}