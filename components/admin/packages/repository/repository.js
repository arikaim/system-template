/**
 *  Arikaim
 *  @copyright  Copyright (c) Konstantin Atanasov <info@arikaim.com>
 *  @license    http://www.arikaim.com/license
 *  http://www.arikaim.com
 */

function PackageRepository() {
    var self = this;

    this.onInstalled;
    this.onError;

    this.install = function(name, type, onSuccess, onError) {
        var params = { 
            package: name,
            type: type           
        };
        return arikaim.put('/core/api/packages/install',params,onSuccess,onError);
    };

    this.installButton = function(selector, onSuccess, onError) {
        selector = getDefaultValue(selector,'.install-repository-button');

        arikaim.ui.button(selector,function(element) {
            var type = $(element).attr('package-type');
            var name = $(element).attr('package-name');
            return packageRepository.install(name,type,function(result) {
                // show message
                
                callFunction(self.onInstalled,result);
            },function(error) {
                callFunction(self.onError,error);
            });
        });   
    };

    this.init = function() {
        var type = $('#package_version_content').attr('package-type');
        var name = $('#package_version_content').attr('package-name');
        
        arikaim.page.loadContent({
            id: 'package_version_content',
            component: 'system:admin.packages.repository.version',
            params: { 
                name: name,
                type: type
            }
        });
    };
}

var packageRepository = new PackageRepository();

$(document).ready(function() {
    packageRepository.init();
})