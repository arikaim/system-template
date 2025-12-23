'use strict';

arikaim.component.onLoaded(function() {  
  
  const collapse = new HSCollapse(document.querySelector('#show_collapse'));

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