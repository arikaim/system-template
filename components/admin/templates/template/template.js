  'use strict';

arikaim.component.onLoaded(function() { 
    $('.languages-select').off('change');

    $('.languages-select').on('change', function() {
        var selected = $(this).val();
        var template = $(this).attr('template');

        console.log(selected);
        console.log(template);

        options.saveConfigOption('language/' + template,selected);   

    });   
});
  
  
    


