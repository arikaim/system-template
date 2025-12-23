'use strict';

arikaim.component.onLoaded(function(component) {   

    component.getCurrentPage = function(onSuccess, onError) {
        var deferred = new $.Deferred();
        var namespace = component.get('namespace');
       
        arikaim.get('/core/api/ui/paginator/' + namespace,function(result) {
            deferred.resolve(result.page);
            callFunction(onSuccess,result.page); 
        },function(error) {
            deferred.reject(error);
            callFunction(onError,error);  
        });

        return deferred.promise();
    }

    component.clear = function(onSuccess, onError) {
        var namespace = component.get('namespace');

        return arikaim.delete('/core/api/ui/paginator/' + namespace,onSuccess,onError);
    };

    component.setPage = function(page, onSuccess, onError) {
        var deferred = new $.Deferred();
        page = (isEmpty(page) == true) ? 1 : page;
       
        var data = { 
            page: page,
            namespace: component.get('namespace') 
        };

        arikaim.put('/core/api/ui/paginator/page',data,function(result) {           
            component.setCurrentPage(result.page);
            deferred.resolve(result.page);  
            callFunction(onSuccess,result);      
        },function(error) {
            deferred.reject(error);  
            callFunction(onError,error);  
        });

        return deferred.promise();
    };

    component.setCurrentPage = function(page) {
        component.set('current-page',page);

        $('.page-link').removeClass('btn-active');       
        $('.page-' + page).addClass('btn-active');   
    };

    component.initButtons = function() {
        var page = component.get('current-page');
        var lastPage = component.get('last-page');
       
        $('.page-link').removeClass('btn-active');       
        $('.page-' + page).addClass('btn-active');    
        
        if (page == 1) {                 
            $('.first-page').addClass('hidden');
            $('.prev-page').addClass('hidden');    
        } else {           
            $('.first-page').removeClass('hidden');
            $('.prev-page').removeClass('hidden');              
        }
           
        if (page == lastPage) {          
            $('.next-page').addClass('hidden');
            $('.last-page').addClass('hidden');          
        } else {
            $('.next-page').removeClass('hidden'); 
            $('.last-page').removeClass('hidden'); 
        } 
    };

    component.getAttributes = function getAttributes($node) {
        var attrs = {};
        $.each($node[0].attributes, function (index,attribute) {
            attrs[attribute.name] = attribute.value ?? null;
        });       
        return attrs;
    };

    component.getParams = function() {
        var rowsElement = $('#' + component.get('rows_selector')); 
        return component.getAttributes(rowsElement);
    }

    component.loadRows = function(onSuccess) {  
        return arikaim.page.loadContent({
            mountTo: component.get('rows_selector'),
            component: component.get('component'),
            params: component.getParams()
        },function(result) {
            callFunction(onSuccess,result);
        });
    };

    component.setParam = function(name, value) {
        $('#' + component.get('rows_selector')).attr(name, value);
       
        component.setPage(1,function() {
            component.loadRows(function() {
                component.reload();
            });
        });        
    };

    component.init = function() {
        arikaim.ui.button('.page-link',function(element) {
            var page = $(element).attr('page'); 
            return component.setPage(page,function(result) {   
                // set current page                                                    
                arikaim.events.emit('paginator.load.page',result);                                                      
                component.loadRows();  
            }); 
        },function() {
            component.initButtons();
        });

        component.initButtons();
    };
    
    component.init();

    return component;
});