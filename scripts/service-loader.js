import { fetch } from './load-json.js';

var day_names = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

export function service_parser(callback){
    var date_full = new Date();
    var day_week = day_names[date_full.getDay()].toLowerCase();
    var date_str = date_full.toISOString();
    date_str = date_str.substring(0,10).replace(/-/g, '');


    fetch(function(response_services) {
        var services = JSON.parse(response_services);
        
        fetch(function(response_exceptions) {
            var exceptions = JSON.parse(response_exceptions);

            var avail_services = services[day_week].filter(function(el) {
                return date_str > el.start && date_str < el.end;
            });

            exceptions.forEach(function(exception) {
                if (date_str == exception.date){
                    if(exception.exception_type == "1"){
                        avail_services.push(services[day_week].find(function(el) {
                            return el.id == exception.service_id;
                        }));
                    }
                    else if (exception.exception_type == "2"){
                        avail_services = avail_services.filter(function(el) {
                            return el.service_id == exception.service_id;
                        });
                    }
                }
            });
            callback(avail_services)
        }, "./json/exceptions.json");

    }, "./json/services.json");

}