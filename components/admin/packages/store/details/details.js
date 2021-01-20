/**
 *  Arikaim
 *  @copyright  Copyright (c) Konstantin Atanasov   <info@arikaim.com>
 *  @license    http://www.arikaim.com/license
 *  http://www.arikaim.com
 */
'use strict';

$(document).ready(function() { 
    var packageName = $('#repository_version').attr('package-name'); 
    var repositoryType = $('#repository_version').attr('repository-type'); 
    var privateRepo = $('#repository_version').attr('private-repostitory'); 
    
    arikaim.page.loadContent({
        id: 'repository_version_value',           
        component: "components:repository.version",
        loaderClass: 'ui active inline centered mini blue loader',
        params: { 
            package: packageName,
            type: repositoryType 
        }
    },function(result) {
        var version = $('#version_value').html();

        arikaim.page.loadContent({
            id: 'package_download',           
            component: "system:admin.packages.store.details.download",
            params: { 
                package: packageName,
                type: repositoryType,
                private: privateRepo,
                repoVersion: version
            }
        });

    });
}); 