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
    var component = arikaim.component.get('system:admin.settings.system');

    this.init = function() {

        arikaim.ui.form.addRules(form_id,{
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

        arikaim.ui.form.onSubmit(form_id,function() {                     
            return self.save(form_id);
        }).done(function() {
            var message = component.getProperty('messages.save');  
            arikaim.ui.form.showMessage(message);
        });
    };

    this.save = function(form_id, onSuccess, onError) {
        var interval = $('#interval').val();
        options.save('session.recreation.interval',interval,function(result) {
            return arikaim.put('/core/api/settings/',form_id,onSuccess,onError);              
        });
    };
}

var systemSettings = new SystemSettings();

arikaim.page.onReady(function() {
    systemSettings.init();
});