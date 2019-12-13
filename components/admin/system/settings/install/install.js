$(document).ready(function() {
    $('#install_page_toggle').checkbox({
        onChecked: function() {
            settings.disableInstallPage(true);         
        },
        onUnchecked: function() {
            settings.disableInstallPage(false);         
        }
    }); 
});
