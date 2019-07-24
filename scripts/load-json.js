function load(json_path) {   
    var get_req = new XMLHttpRequest();
    get_req.open('GET', json_path);
    get_req.responseType = 'json';
    get_req.send();
    return get_req.response
}