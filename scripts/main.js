import { fetch } from './load-json.js';
import {stop_parser} from './stop-loader.js';
import {service_parser} from './service-loader.js';

var times = [];

var app = new Vue({
    el: '#main',
    data: {
        stop_id : "",
        times : []
    },
    methods: {
        submit: function (){
            service_parser(function(active_services){
                stop_parser(active_services, app.stop_id, function(merged_times){
                    console.log(merged_times);
                    app.times = merged_times;
                });
            });
        }
    }
})

Vue.component('stop_list',{
    template: `
    <div>
        <div v-if="gotList">
            <ul id="times-list">
                <li v-for="time in times">
                    {{time.times}}
                </li>
            </ul>
        </div>
        <div v-else>
        </div>
    </div>
    `
})