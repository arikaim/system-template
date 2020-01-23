/**
 *  Arikaim
 *  @copyright  Copyright (c) Konstantin Atanasov <info@arikaim.com>
 *  @license    http://www.arikaim.com/license
 *  http://www.arikaim.com
 */

function ArikaimStoreView() {
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
        
        arikaim.ui.button('.install-package',function(element) {
            var type = $(element).attr('package-type');
            var name = $(element).attr('package-name');

            return packageRepository.install(name,type,function(result) {
                // show message
                $(element).hide();

                arikaim.ui.form.showMessage({
                    selector: '#message',
                    message: result.message,
                    class: 'success',    
                    removeClass: 'error',                      
                    hide: 4000
                });
            },function(error) {
                arikaim.ui.form.showMessage({
                    selector: '#message',
                    message: error,
                    class: 'error', 
                    removeClass: 'success',                       
                    hide: 4000
                });               
            });
        });
    };
}

var arikaimStoreView = new ArikaimStoreView();

$(document).ready(function() {
    arikaimStoreView.initRows();   
});