/**
 *  Arikaim
 *  @copyright  Copyright (c) Konstantin Atanasov <info@arikaim.com>
 *  @license    http://www.arikaim.com/license
 *  http://www.arikaim.com
 */
'use strict';

function ComponentsLibraryView() {
    this.initRows = function() {
        arikaim.ui.button('.details-button',function(element) {
        });
    }
}

var componentsLibraryView = ComponentsLibraryView();

arikaim.component.onLoaded(function() {  
    componentsLibraryView.initRows();
});
