/**
 *  Arikaim
 *  @version    1.0  
 *  @copyright  Copyright (c) Konstantin Atanasov <info@arikaim.com>
 *  @license    http://www.arikaim.com/license.html
 *  http://www.arikaim.com
 * 
 */

function Search() {
    var self = this;

    this.init = function(namespace, form_id, onSuccess) {
        form_id = getDefaultValue(form_id,"#search_form");
        
        $('.search-fields').dropdown({           
            allowAdditions: true
        });   

        $('.search-actions').dropdown();

        arikaim.ui.button(form_id + ' .clear-form',function(element) {
            return self.clear(namespace).done(function(result) {
                arikaim.ui.form.clear(form_id);
                if (isObject(onSuccess) == true) {                
                    self.loadResult(onSuccess);
                } else {
                    callFunction(onSuccess,result);
                }
            });           
        });

        arikaim.ui.form.onSubmit(form_id,function() {
            var items = self.getSearchFields(form_id);
            var data = { search: items };

            return self.setSearch(data,namespace,function(result) {
                if (isObject(onSuccess) == true) {                
                    self.loadResult(onSuccess);
                } else {
                    callFunction(onSuccess,result);
                }
            });
        });
    };

    this.getSearchFields = function(form_id) {
        var items = {};
        $(form_id).find('.search-field').each(function(index) {
            var name = $(this).attr('name');
            var value = $(this).val();
            items[name] = value;
        });   
        return items;
    };
    
    this.clear = function(namespace, onSuccess, onError) {
        namespace = getDefaultValue(namespace,"");
        return arikaim.delete('/core/api/ui/search/' + namespace,onSuccess,onError);          
    };

    this.setSearch = function(search_data, namespace, onSuccess, onError) {
        namespace = getDefaultValue(namespace,"");      
        return arikaim.put('/core/api/ui/search/' + namespace,search_data,onSuccess,onError);           
    };

    this.loadResult = function(options, onSuccess, onError) {  
        if (isObject(options) == false) {
            return false;
        }       
        return arikaim.page.loadContent({
            id: options.id,
            component: options.component_name
        },onSuccess,onError);
    };
}

var search = new Search();
