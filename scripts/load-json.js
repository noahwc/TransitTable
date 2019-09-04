export function fetch(callback, json_path) {
  var get_req = new XMLHttpRequest();
  get_req.overrideMimeType("application/json");
  get_req.open('GET', json_path, true);
  get_req.onreadystatechange = function () {
        if (get_req.readyState == 4 && get_req.status == "200") {
          callback(get_req.responseText);
        }
  };
  get_req.send();  
}