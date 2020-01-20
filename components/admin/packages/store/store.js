/**
 *  Arikaim
 *  @copyright  Copyright (c) Konstantin Atanasov <info@arikaim.com>
 *  @license    http://www.arikaim.com/license
 *  http://www.arikaim.com
 */

function ArikaimStore() {
    var self = this;

    this.initRows = function() {

        $('.package-version').each(function(index) {
            var package = $(this).attr('package');
            var uuid = $(this).attr('uuid');
           
            arikaim.page.loadContent({
                id: 'version_' + uuid,           
                component: "components:repository.version",
                loaderClass: 'ui active inline centered mini blue loader',
                params: { package: package }
            });
        });
        
        arikaim.ui.button('install-package',function(element) {
            var type = $(element).attr('package-type');
            var name = $(element).attr('package-name');
            return packageRepository.install(name,type,function(result) {
    
            });
        });
    };
}

var arikaimStore = new ArikaimStore();