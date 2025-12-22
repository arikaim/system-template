'use strict';

arikaim.component.onLoaded(function() {  
   // $('#php_extensions_info').accordion();
  //  $('#composer_packages_info').accordion();

  const collapse = new HSCollapse($('#show_collapse'));

    arikaim.ui.button('.check-console',function(element) {
        arikaim.page.loadContent({
            id: 'console_content',
            component: 'system:admin.system.info.console'
        });
    });

    arikaim.ui.button('.node-info',function(element) {
        arikaim.page.loadContent({
            id: 'console_content',
            component: 'system:admin.system.info.node'
        });
    });
});