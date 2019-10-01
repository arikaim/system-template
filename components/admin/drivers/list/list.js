$(document).ready(function() {  
    arikaim.ui.button('.driver-config',function(element) {  
        var name = $(element).attr('driver-name');
        var category = $(element).attr('driver-category');

        arikaim.events.emit('driver.config',element,name,category);       
    });
});