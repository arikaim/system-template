$(document).ready(function() {
    $('.option-dropdown').dropdown();

    arikaim.ui.form.onSubmit('#options_form',function() {       
        return arikaim.put('/core/api/orm/options','#options_form');
    },function(result) {      
        arikaim.ui.form.showMessage({
            message: result.message
        })
    });
});