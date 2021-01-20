/**
 *  Arikaim
 *  @copyright  Copyright (c) Konstantin Atanasov <info@arikaim.com>
 *  @license    http://www.arikaim.com/license
 *  http://www.arikaim.com
 */
'use strict';

function ArikaimStoreView() {
    var self = this;

    this.init = function() {

        arikaim.ui.button('.store-settings',function(element) {
            $('#packages_list').html('');
            $('#paginator').html('');
            return arikaim.page.loadContent({
                id: 'arikaim_store_settings',           
                component: 'system:admin.packages.store.settings',
                params: {}
            },function(result) {
               
            });
        });

        arikaim.ui.button('#packages_type',function(element) {
            var type = $(element).attr('type');
            $('#package_details_button').remove();
            $('#arikaim_store_settings').html('');

            return arikaim.page.loadContent({
                id: 'packages_list',           
                component: 'system:admin.packages.store.view.rows',
                params: { 
                    type: type                   
                }
            },function(result) {
                self.initRows();
            });
        });
    };

    this.initRows = function() {
        arikaim.ui.button('.package-details',function(element) {
            var uuid = $(element).attr('uuid');
            var installedVersion = $(element).attr('installed');
            $('#packages_list').html('');
            $('#paginator').html('');

            return arikaim.page.loadContent({
                id: 'arikaim_store_settings',           
                component: 'system:admin.packages.store.details',
                params: { 
                    uuid: uuid,
                    installed_version: installedVersion
                }
            },function(result) {
                self.initPackageDetails();
            });
        });

        arikaim.ui.button('.install-package',function(element) {
            var type = $(element).attr('package-type');
            var name = $(element).attr('package-name');
            var repositoryType = $(element).attr('repository-type');
            var uuid = $(element).attr('uuid');

            return packageRepository.install(name,type,repositoryType,function(result) {
                // show message
                $(element).hide();
                arikaim.page.toastMessage(result.message);
                arikaim.ui.show('#installed_' + uuid);             
            },function(error) {
                arikaim.page.toastMessage({
                    message: error[0],
                    class: 'error'
                });                        
            });
        });        
    };

    this.initPackageDetails = function() {
        var packageTitle = $('#package_details').attr('package-title');
        var uuid = $('#package_details').attr('uuid');
        var installedVersion = $('#package_details').attr('installed');

        arikaim.page.loadContent({
            id: 'links_path',      
            append: true,     
            component: 'system:admin.packages.store.details.link',
            params: { 
                uuid: uuid,
                title: packageTitle,
                installed_version: installedVersion
            }
        },function(result) {

            arikaim.ui.button('#package_details_button',function(element) {
                var uuid = $(element).attr('uuid');
                var installedVersion = $(element).attr('installed-version');
                $('#packages_list').html('');
                $('#paginator').html('');
                
                return arikaim.page.loadContent({
                    id: 'arikaim_store_settings',           
                    component: 'system:admin.packages.store.details',
                    params: { 
                        uuid: uuid,
                        installed_version: installedVersion
                    }
                },function(result) {
                   
                });
            });
        });

        arikaim.ui.button('.update-package',function(element) {
            var type = $(element).attr('package-type');
            var name = $(element).attr('package-name');
            var uuid = $(element).attr('uuid');

            return packageRepository.update(name,type,function(result) {
                // show message
                $(element).hide();
                arikaim.page.toastMessage(result.message);
                arikaim.ui.show('#installed_' + uuid);    
                if (isEmpty(result.version) == false) {
                    $('#current_' + uuid).html(result.version);    
                }                    
            },function(error) {
                arikaim.page.toastMessage({
                    message: error[0],
                    class: 'error'
                });                        
            });
        });
    }
}

var arikaimStoreView = new ArikaimStoreView();

$(document).ready(function() {
    arikaimStoreView.init();   
    arikaimStoreView.initRows();   
});