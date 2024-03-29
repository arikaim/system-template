/**
 *  Arikaim
 *  @copyright  Copyright (c) Konstantin Atanasov   <info@arikaim.com>
 *  @license    http://www.arikaim.com/license
 *  http://www.arikaim.com
 */
'use strict';

function Packages() {
     
    this.update = function(name, packageType, onSuccess, onError) {
        var data = {
            name: name,
            type: packageType
        };

        return arikaim.put('/core/api/packages/update',data,onSuccess,onError);          
    };

    this.confirmUpload = function(packageDir, onSuccess, onError) {
        var data = {
            package_directory: packageDir           
        };

        return arikaim.put('/core/api/packages/upload/confirm',data,onSuccess,onError);          
    };

    this.updateComposerPackages = function(name, packageType, onSuccess, onError) {
        var data = { 
            name: name,
            type: packageType 
        };  

        return arikaim.put('/core/api/packages/composer/update',data,onSuccess,onError);            
    };

    this.install = function(name, packageType, onSuccess, onError) {
        var data = { 
            name: name,
            type: packageType 
        };  

        return arikaim.put('/core/api/packages/install',data,onSuccess,onError);            
    };
    
    this.unInstall = function(name, packageType, onSuccess, onError) { 
        var data = { 
            name: name,
            type: packageType 
        };  

        return arikaim.put('/core/api/packages/uninstall',data,onSuccess,onError);           
    };

    this.enable = function(name, packageType, onSuccess, onError) {    
        var data = { 
            name: name, 
            status: 1,
            type: packageType
        };   

        return arikaim.put('/core/api/packages/status',data,onSuccess,onError);        
    };

    this.disable = function(name, packageType, onSuccess, onError) {    
        var data = { 
            name: name,
            status: 0,
            type: packageType 
        };
           
        return arikaim.put('/core/api/packages/status',data,onSuccess,onError);        
    };

    this.changeStatus = function(name, packageType, status, onSuccess, onError) {         
        var data = { 
            name: name, 
            type: packageType,
            status: status 
        };

        return arikaim.put('/core/api/packages/status',data,onSuccess,onError);           
    };

    this.setPrimary = function(name, packageType, onSuccess, onError) {
        var data = {
            name: name,
            type: packageType
        };
        
        return arikaim.put('/core/api/packages/primary',data,onSuccess,onError);         
    };

    this.saveLibraryParams = function(name, params, onSuccess, onError) {
        var data = {
            name: name,
            params: params
        };
        
        return arikaim.put('/core/api/packages/library/params',data,onSuccess,onError);         
    };
}

var packages = new Packages();
