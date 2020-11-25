/**
 *  Arikaim
 *  @copyright  Copyright (c) Konstantin Atanasov <info@arikaim.com>
 *  @license    http://www.arikaim.com/license
 *  http://www.arikaim.com
 */
'use strict';

function ControlPanelView() {
    var self = this;
    this.messges = {};

    this.loadMessages = function(componentName) {
        if (isObject(this.messages) == true) {
            return;
        }
        arikaim.component.loadProperties(componentName,function(params) { 
            self.messages = params.messages;
        }); 
    };

    this.init = function() {};
    this.initRows = function() {};
    this.loadRows = function() {};
}