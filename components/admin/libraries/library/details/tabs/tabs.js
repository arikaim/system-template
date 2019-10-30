$(document).ready(function() {  
    packageRepository.onInstalled = function(result) {
        console.log('result');
        console.log(result);
    };
    packageRepository.onError = function(error) {
        console.log('err');
        console.log(error);
    };
});