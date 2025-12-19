/**
 *  Arikaim
 *  @copyright  Copyright (c) Konstantin Atanasov <info@arikaim.com>
 *  @license    http://www.arikaim.com/license
 *  http://www.arikaim.com
 */
'use strict';

function Libraries() {
  
    this.setStatus = function(name, status, onSuccess, onError) {
        return arikaim.put('/core/api/packages/library/status',{
            name: name,
            status: status
        },onSuccess,onError);
    };

    this.showDetails = function(name, onSuccess) {
        arikaim.page.loadContent({
            id: 'tab_content',
            component: 'system:admin.libraries.library.details',
            params: { library_name: name }
        },function(result) {                     
            callFunction(onSuccess,result);           
        });  
    };

    this.showLibraryDetails = function(name, onSuccess) {
        return arikaim.page.loadContent({
            id: 'library_details',
            component: "system:admin.libraries.library.details.tabs",
            params: { library_name : name },
            useHeader: true
        },function(result) {            
            callFunction(onSuccess,result);             
        });     
    }
}

var libraries = new Libraries();
