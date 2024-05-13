/**
 *  Arikaim
 *  @copyright  Copyright (c) Konstantin Atanasov <info@arikaim.com>
 *  @license    http://www.arikaim.com/license
 *  http://www.arikaim.com
 */
'use strict';

function ArikaimStoreView() {
    var self = this;

    this.init = function() {
        
        arikaimStoreView.initRows();   
    };

    this.initRows = function() {
    };
}

var arikaimStoreView = new ArikaimStoreView();

arikaim.component.onLoaded(function() {    
    arikaimStoreView.init();   
});