"use strict";

arikaim.page.onReady(function() {
    $('#country_code').dropdown({});
    
    arikaim.ui.form.addRules("#language_form",{
        inline: false,
        fields: {
            code: {
                rules: [{ type:'exactLength[2]' }]
            },
            code_3: {
                rules: [{ type: 'exactLength[3]' }]
            },
            title: {
                rules: [{
                    type: "empty"     
                }]
            },
            country_code: {
                rules: [{
                    type: "empty"            
                }]
            }
        }
    });
});