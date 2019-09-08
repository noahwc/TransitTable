import { fetch } from './load-json.js';
import {stop_parser} from './stop-loader.js';
import {service_parser} from './service-loader.js';

function compare(a, b){
    if (a.departure_time < b.departure_time) return -1;
    if (a.departure_time > b.departure_time) return 1;
}

function removeDuplicates(items){
    for (var i = 1; i < items.length; i++){
        if((items[i-1].departure_time == items[i].departure_time)&&(items[i-1].route_id == items[i].route_id)){
            items.splice(i,1);
            i--;
        }
    }
    return items;
}

var app = new Vue({
    el: '#main',
    data: {
        stop_id : "",
        got_list : false,
        times : []
    },
    methods: {
        submit: function (){
            service_parser(function(active_services){
                stop_parser(active_services, app.stop_id, function(merged_times){
                    app.times = merged_times.sort(compare);
                    app.times = removeDuplicates(app.times);
                    app.got_list = true;
                    console.log(app.times);
                });
            });
        }
    }
})