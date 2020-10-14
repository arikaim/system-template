/**
 *  Arikaim
 *  @copyright  Copyright (c) Konstantin Atanasov <info@arikaim.com>
 *  @license    http://www.arikaim.com/license
 *  http://www.arikaim.com
 */
"use strict";

function SystemSettings() {
   
    this.disableInstallPage = function(value, onSuccess, onError) {
        var data = { 
            install_page: value 
        };

        return arikaim.put('/core/api/settings/install-page',data,onSuccess,onError);
    };

    this.init = function() {   
        arikaim.ui.tab('.settings-item','settings_content');
    };
}

var settings = new SystemSettings();

$(document).ready(function() {
    settings.init();
});
