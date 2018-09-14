/**
 *  Arikaim
 *  @version    1.0  
 *  @copyright  Copyright (c) Konstantin Atanasov <info@arikaim.com>
 *  @license    http://www.arikaim.com/license.html
 *  http://www.arikaim.com
 * 
 */

function ConfirmDialog() {
    var params = {};
    var self = this;
    var confirm_dialog_id = '#confirm_dialog';
    var delete_dialog_id = '#delete_dialog';

    this.show = function(parameters,onApprove,onDeny) {
        this.confirmDialog(parameters,onApprove,onDeny,confirm_dialog_id);
    };

    this.confirmDialog = function(parameters,onApprove,onDeny,element) {
        if (isEmpty(element) == true) {
            return false;
        }

        if (isEmpty(parameters) == true) {
            params = {};
        } else {
            params = parameters;
            if (isEmpty(params.title) == false) {
                $(element + ' .confirm-dialog-title').html(params.title);
            }
            if (isEmpty(params.description) == false) {
                $(element + ' .confirm-dialog-description').html(params.description);
            }
            if (isEmpty(params.confirm) == false) {
                $('#confirm_button').html(params.confirm);
            }
        }
        $(element).modal({
            onDeny : function() {
                callFunction(onDeny,params);                
            },
            onApprove : function() {
                callFunction(onApprove,params);                                        
            }
        }).modal('show');
    };

    this.confirmDelete = function(parameters,onApprove,onDeny) {
        return this.confirmDialog(parameters,onApprove,onDeny,delete_dialog_id);
    }

    this.init = function() {
        arikaim.component.loadContent('system:confirm-dialog',function(result) {
            $('body').append(result.html);
        }); 
    };

    this.getParams = function() {
        return params;
    };
}

var confirmDialog = new ConfirmDialog();
confirmDialog.init();