import { fetch } from './load-json.js';
import {stop_parser} from './stop-loader.js';
import {service_parser} from './service-loader.js';

var times = [];

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
                    app.times = merged_times;
                    app.got_list = true;
                    console.log(app.times);
                });
            });
        }
    }
})