'use strict';
var exports = module.exports = {};

exports.build_json = function(url_component) {
    
    if (Number(url_component) == url_component) {
        url_component = Number(url_component) * 1000;
    }
    
    var date = new Date(url_component);
    var to_return = {};
    
    function formatDate(date_obj) {
    
        var month_array = ['January', 'February', 'March', 'April', 
                        'May', 'June', 'July', 'August', 
                        'September', 'October', 'November', 'December'];
                        
        var day = date_obj.getDate();
        var month = month_array[date_obj.getMonth()];
        var year = date_obj.getFullYear();
    
        return month + ' ' + String(day) + ', ' + String(year);
    } 
    
    if (date == 'Invalid Date') {
        to_return.unix = null;
        to_return.natural = null;
    } else {
        to_return.unix = Math.floor(Date.parse(date) / 1000);
        to_return.natural = formatDate(date);
    }
    
    return JSON.stringify(to_return);
    
}





