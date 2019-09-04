import { fetch } from './load-json.js';

var day_names = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

export function parser(){
    var date_full = new Date();
    var day_week = day_names[date_full.getDay()].toLowerCase();
    var date_str = date_full.getFullYear().toString() + date_full.getMonth().toString() + date_full.getDate.toString();

    fetch(function(response_services) {
        var services = JSON.parse(response_services);
        
        fetch(function(response_exceptions) {
            var exceptions = JSON.parse(response_exceptions);

            var day_available = services[day_week]
            
        }, "/json/exceptions.json");

    }, "/json/services.json");

}