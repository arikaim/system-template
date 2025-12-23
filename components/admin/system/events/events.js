/**
 *  Arikaim
 *  @copyright  Copyright (c) Konstantin Atanasov <info@arikaim.com>
 *  @license    http://www.arikaim.com/license
 *  http://www.arikaim.com
 */
'use strict';

function EventsView() {
    var self = this;

    this.init = function() {
        this.initRows();
    };

    this.initRows = function() {
        arikaim.ui.button('.event-details',function(element) {
            var uuid = $(element).attr('uuid');      
        
            arikaim.page.loadContent({
                id: 'event_details',
                component: 'system:admin.system.events.details',
                params: {
                    uuid: uuid
                }
            });
        });
    }
}

var eventsView = createObject(EventsView,ControlPanelView);

arikaim.component.onLoaded(function() {  
    eventsView.init();
});
