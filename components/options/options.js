'use strict';

function Options() {

    this.save = function(name, value, onSuccess, onError) { 
        return arikaim.put('/core/api/options/',{ 
            key: name,
            value: value 
        },onSuccess,onError);
    };

    this.saveConfigOption = function(name, value, onSuccess, onError) { 
        return arikaim.put('/core/api/settings/update/option',{ 
            key: name,
            type: typeof(value),
            value: value 
        },onSuccess,onError);
    };

    this.saveAll = function(formId, onSuccess, onError) {
        return arikaim.post('/core/api/options/',formId,onSuccess,onError);
    };

    this.get = function(name, onSuccess, onError) {
        return arikaim.get('/core/api/options/' + name,onSuccess,onError);
    };
}

var options = new Options();
