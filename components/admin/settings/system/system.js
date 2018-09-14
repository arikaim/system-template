/**
 *  Arikaim
 *  @version    1.0  
 *  @copyright  Copyright (c) Konstantin Atanasov <info@arikaim.com>
 *  @license    http://www.arikaim.com/license.html
 *  http://www.arikaim.com
 * 
 */

function SystemSettings() {

    var self = this;
    var form_id = '#system_settings_form';
    var component = arikaim.getComponent('system:admin.settings.system');

    this.init = function() {

        arikaim.form.addRules(form_id,{
            inline: false,
            fields: {
                recreate_interval: {
                    identifier: 'recreation',
                    rules: [
                        { type: 'empty' },
                        { type: 'integer[0..10000]'}
                    ]          
                }
            }
        });
        arikaim.form.onSubmit(form_id,function() {         
            $('#save_button').addClass('disabled loading');
            self.save(form_id,function(result) {
                $('#save_button').removeClass('disabled loading');
                var msg = component.getProperty('messages.save');  
                arikaim.form.showMessage({ msg: msg, auto_hide: 1000 });
            });
        });
    };

    this.save = function(form_id,onSuccess) {
        var interval = $('#interval').val();
        settings.save('session.recreation.interval',interval,function(result) {
            arikaim.put('/admin/api/settings/',form_id,function(result) {
                callFunction(onSuccess,result);
            });
        });
    };
}

var systemSettings = new SystemSettings();

arikaim.page.onReady(function() {
    systemSettings.init();
});