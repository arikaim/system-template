$(document).ready(function() {
    $('#mailer_settings_dropdown').dropdown({
        onChange: function(value, text, choice) {
            var ssl = $(choice).attr('ssl');
            $('#port').val($(choice).attr('port'));
            $('#host').val($(choice).attr('host'));
            if (ssl == 1) {              
                $('#use_ssl').checkbox('set checked');
            }           
        }
    })
});