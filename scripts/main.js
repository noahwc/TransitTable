import { fetch } from './load-json.js';
import {stop_parser} from './stop-loader.js';
import {service_parser} from './service-loader.js';

const states = {
    badLOAD: 'load-error',
    READY: 'displaying',
    WAITING: 'await-user'
}

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
        bad_id : "",
        state : states.WAITING,
        times : []
    },
    methods: {
        submit: function (){
            service_parser(function(active_services){
                stop_parser(active_services, app.stop_id, function(merged_times){
                    if(merged_times == states.badLOAD){
                        app.state = states.badLOAD;
                        app.bad_id = app.stop_id
                    }
                    else{
                        app.times = merged_times.sort(compare);
                        app.times = removeDuplicates(app.times);
                        app.state = states.READY;
                        console.log(app.times);
                    }
                });
            });
        }
    }
})