var day_names = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

function parser(){
    import {load} from 'load-json';
    var json_services = load("./json/services.json");
    var json_exceptions = load("./json/exceptions.json");
    var date_full = new Date();
    var day_week = day_names[date_full.getDay()].toLowerCase();
    var date_str = date_full.getFullYear().toString() + date_full.getMonth().toString() + date_full.getDate.toString();
    // TODO: Find active services.
}