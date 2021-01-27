/**
 *  Arikaim
 *  @copyright  Copyright (c) Konstantin Atanasov <info@arikaim.com>
 *  @license    http://www.arikaim.com/license
 *  http://www.arikaim.com
 */
"use strict";

function Jobs() {

    this.enable = function(uuid, onSuccess, onError) {
        var data = { 
            uuid: uuid,
            status: 1 
        };
        
        return arikaim.put('/core/api/jobs/status',data,onSuccess,onError)
    };

    this.disable = function(uuid, onSuccess, onError) {
        var data = { 
            uuid: uuid,
            status: 5 // Suspended 
        };

        return arikaim.put('/core/api/jobs/status',data,onSuccess,onError);           
    };

    this.delete = function(uuid, onSuccess, onError) {
        return arikaim.delete('/core/api/jobs/delete/'+ uuid,onSuccess,onError);           
    };

    this.saveConfig = function(formId, onSuccess, onError) {
        return arikaim.put('/core/api/jobs/config',formId,onSuccess,onError);      
    }
   
    this.load = function(uuid, selector, onSuccess, onError) {
        arikaim.page.loadContent({
            id: selector,           
            component: "system:admin.jobs.job",
            params: { uuid: uuid }
        },function(result) {
            callFunction(onSuccess,result);
        },function(error) {
            callFunction(onError,error);
        });
    };
}

var jobs = new Jobs();
