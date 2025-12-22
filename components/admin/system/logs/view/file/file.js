/**
 *  Arikaim
 *  @copyright  Copyright (c) Konstantin Atanasov <info@arikaim.com>
 *  @license    http://www.arikaim.com/license
 *  http://www.arikaim.com
 */
 'use strict';

 function FileLogsView() {
    
    this.init = function() {
        paginator.init('logs_rows',"system:admin.system.logs.view.file.rows",'logs.file');    
    };   

 }
 
var fileLogsView = createObject(FileLogsView,ControlPanelView);
 
arikaim.component.onLoaded(function() {    
    fileLogsView.init();    
});