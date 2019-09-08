import { fetch } from './load-json.js';

export function stop_parser(active_services, stop_id, callback){
    var times = []
    fetch(function(stops) {
        if(stops == "load-error"){
            callback(stops);
        }
        else{
            var stop_list = JSON.parse(stops);
            active_services.forEach(function(service) {
                if(service.id in stop_list){
                    times = times.concat(stop_list[service.id]);
                }
            });
            callback(times);
        }
    }, ("./json/" + stop_id + ".json"));
}