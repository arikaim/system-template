/**
 *  Arikaim
 *  @copyright  Copyright (c) Konstantin Atanasov <info@arikaim.com>
 *  @license    http://www.arikaim.com/license
 *  http://www.arikaim.com
 */
'use strict';

function DbLogsView() {
    var self = this;
   
    this.init = function() {
        paginator.init('logs_rows',"system:admin.system.logs.view.db.rows",'logs');    

        search.init({
            id: 'logs_rows',
            component: 'system:admin.system.logs.view.db.rows',
            event: 'logs.search.load'
        },'logs')
        
        $('#log_message_type_dropdown').on('change', function() {
            var val = $(this).val();

            search.setSearch({
                search: {
                    level: val,                       
                }          
            },'logs',function(result) {                  
                arikaim.page.loadContent({
                    id: 'logs_rows',         
                    component: 'system:admin.system.logs.view.db.rows'
                },function(result) {
                    self.initRows();  
                    paginator.reload(); 
                });
            });    
            
        });
    };   

    this.initRows = function() {
    };
}

var dbLogsView = createObject(DbLogsView,ControlPanelView);

arikaim.component.onLoaded(function() {    
    dbLogsView.init();
    dbLogsView.initRows();
});
