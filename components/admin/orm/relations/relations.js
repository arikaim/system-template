/**
 *  Arikaim
 *  @copyright  Copyright (c) Konstantin Atanasov <info@arikaim.com>
 *  @license    http://www.arikaim.com/license
 *  http://www.arikaim.com
 */
'use strict';

function Relations() {
   
    this.deleteRelation = function(model, extension, id, type, relationId, onSuccess, onError) {
        return arikaim.put('/core/api/orm/relation/delete',{
            model: model, 
            extension: extension,
            type: type,
            id: id,
            relation_id: relationId
        },onSuccess,onError); 
    };

    this.delete = function(model, extension, uuid, onSuccess, onError) {         
        return arikaim.put('/core/api/orm/relation/delete',{
            model: model, 
            extension: extension,
            uuid: uuid         
        },onSuccess,onError);          
    };

    this.add = function(model, extension, id, type, relationId, onSuccess, onError) {    
        return arikaim.post('/core/api/orm/relation',{
            model: model, 
            extension: extension,
            type: type,
            id: id,
            relation_id: relationId
        },onSuccess,onError);          
    };    
}

var relations = new Relations();
