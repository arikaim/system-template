/**
 *  Arikaim
 *  @version    1.0  
 *  @copyright  Copyright (c) Konstantin Atanasov <info@arikaim.com>
 *  @license    http://www.arikaim.com/license.html
 *  http://www.arikaim.com
 * 
 */

function Paginator() {
    var self = this;    
    var options = null;
    

    this.init = function(element_id, component_name, namespace) {        
        this.setOptions(element_id,component_name, namespace);

        arikaim.ui.button('.page-link',function(element) {
            var page = $(element).attr('page'); 
            return self.setPage(page,self.getOptions().namespace).done(function(result) {
                self.loadRows(self.getOptions());  
            }); 
        });
       
        $('.page-size-menu').dropdown({
            onChange: function(value) {               
                self.setPageSize(value,self.getOptions().namespace).done(function(page_size) {
                    self.loadRows(self.getOptions());
                });                           
            }
        });
    };

    this.setOptions = function(element_id, component_name, namespace) {
        namespace = getDefaultValue(namespace,"");
        options = { id: element_id, component: component_name, namespace: namespace };
    };

    this.getOptions = function() {      
        return options;
    }

    this.getCurrentPage = function(namespace, onSuccess, onError) {
        var deferred = new $.Deferred();
        namespace = getDefaultValue(namespace,"");

        arikaim.get('/core/api/ui/paginator/' + namespace,function(result) {
            deferred.resolve(result.page);
            callFunction(onSuccess,result.page); 
        },function(error) {
            deferred.reject(error);
            callFunction(onError,error);  
        });

        return deferred.promise();
    }

    this.getViewType = function(namespace, onSuccess, onError) {
        var deferred = new $.Deferred();
        namespace = getDefaultValue(namespace,"");

        arikaim.get('/core/api/ui/paginator/view/' + namespace,function(result) {
            deferred.resolve(result.view);  
            callFunction(onSuccess,result.view); 
        },function(error) {
            deferred.reject(error);
            callFunction(onError,error);  
        });

        return deferred.promise();
    }

    this.setViewType = function(view_type, namespace, onSuccess, onError) {
        var deferred = new $.Deferred();

        view_type = (isEmpty(view_type) == true) ? 'table' : view_type;
        namespace = getDefaultValue(namespace,"");

        var data = { view: view_type };
        arikaim.put('/core/api/ui/paginator/view/' + namespace,data,function(result) {
            deferred.resolve(result.view);  
            callFunction(onSuccess,result.view);      
        },function(error) {
            deferred.reject(error);
            callFunction(onError,error);  
        });

        return deferred.promise();
    };

    this.setPageSize = function(page_size, namespace, onSuccess, onError) {
        var deferred = new $.Deferred();

        page_size = (isEmpty(page_size) == true) ? 1 : page_size;
        namespace = getDefaultValue(namespace,"");
        var data = { page_size: page_size };

        arikaim.put('/core/api/ui/paginator/page-size/' + namespace,data,function(result) {
            deferred.resolve(result.page_size);  
            callFunction(onSuccess,result.page_size);      
        },function(error) {
            deferred.reject(error);  
            callFunction(onError,error);  
        });

        return deferred.promise();
    };

    this.setPage = function(page, namespace, onSuccess, onError) {
        var deferred = new $.Deferred();

        page = (isEmpty(page) == true) ? 1 : page;
        namespace = getDefaultValue(namespace,"");

        var data = { page: page };
        arikaim.put('/core/api/ui/paginator/' + namespace,data,function(result) {
            deferred.resolve(result.page);  
            callFunction(onSuccess,result.page);      
        },function(error) {
            deferred.reject(error);  
            callFunction(onError,error);  
        });

        return deferred.promise();
    };

    this.loadRows = function(options) { 

        if (isObject(options) == false) {
            return false;
        }
    
        return arikaim.page.loadContent({
            id: options.id,
            component: options.component
        });
    };
}

var paginator = new Paginator();
