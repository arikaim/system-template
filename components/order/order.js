/**
 *  Arikaim
 *  @version    1.0  
 *  @copyright  Copyright (c) Konstantin Atanasov <info@arikaim.com>
 *  @license    http://www.arikaim.com/license.html
 *  http://www.arikaim.com
 * 
 */

function OrderBy() {
    var self = this;
    var options = null;

    this.init = function(element_id, component_name, namespace) {
        this.setOptions(element_id,component_name, namespace);

        $('.order-by-link').each(function(index) {
            $(this).on('click',function() {
                var field = $(this).attr('order-by');
                var type = $(this).attr('order-by-type');
                self.set(field,type,self.getOptions().namespace,function(result) {
                    self.loadResult(self.getOptions());
                });
            });
        });
    };

    this.setOptions = function(element_id, component_name, namespace) {
        namespace = getDefaultValue(namespace,"");
        options = { id: element_id, component: component_name, namespace: namespace };
    };

    this.getOptions = function() {      
        return options;
    }

    this.get = function(namespace, onSuccess, onError) {
        namespace = (isEmpty(namespace) == true) ? "" : namespace;
        return arikaim.get('/core/api/ui/order/' + namespace,onSuccess,onError);          
    };

    this.delete = function(namespace, onSuccess, onError) {
        namespace = (isEmpty(namespace) == true) ? "" : namespace;
        return arikaim.delete('/core/api/ui/order/' + namespace,onSuccess,onError);           
    };

    this.set = function(field_name, type, namespace, onSuccess, onError) {
        namespace = (isEmpty(namespace) == true) ? "" : namespace;
        var data = { field: field_name, type: type };

        return arikaim.put('/core/api/ui/order/' + namespace,data,onSuccess,onError);          
    };

    this.loadResult = function(options, onSuccess, onError) {  
        if (isObject(options) == false) {
            return false;
        }       
        return arikaim.page.loadContent({
            id: options.id,
            component: options.component
        },onSuccess,onError);          
    };
}

var order = new OrderBy();
