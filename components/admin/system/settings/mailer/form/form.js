arikaim.page.onReady(function () {
    arikaim.ui.viewPasswordButton('.view-password','#password');
        
        arikaim.ui.button('#send_button',function() {
            return mailerSettings.sendTestEmail();
        });

        $('#use_ssl').checkbox({});
        $('#use_sendmail').checkbox({
            onChecked: function() {
                var optionName = $(this).attr('name');
                options.save(optionName,true);
                arikaim.ui.hide('#smtp_setings_form');                
            },
            onUnchecked: function() {
                var optionName = $(this).attr('name');
                options.save(optionName,false);
                arikaim.ui.show('#smtp_setings_form');                
            }
        }); 
         
        arikaim.ui.form.addRules('#mailer_settings_form',{
            inline: false,
            fields: {
                user_name: {
                    rules: [{ type: 'minLength[2]' }]          
                },        
                password: {
                    rules: [{ type: 'minLength[2]' }]   
                },
                port: {
                    rules: [{ type: 'minLength[2]' }]   
                },
                host: {
                    rules: [{ type: 'minLength[5]' }]   
                }
            }
        });
    
        arikaim.ui.form.onSubmit('#mailer_settings_form',function(data) {         
            return options.saveAll('#mailer_settings_form');
        },function(result) {           
            arikaim.ui.form.showMessage(result.message);    
        },function(error) {

        });
});