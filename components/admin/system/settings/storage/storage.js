'use strict';

arikaim.component.onLoaded(function() {    
    arikaim.ui.button('.init-storage',function(element) {
        return arikaim.put('/core/api/install/storage',null,function(result) {
            arikaim.ui.getComponent('toast').show(result.message);
        },function(error) {
            arikaim.ui.getComponent('toast').show(error);          
        });
    });
});
