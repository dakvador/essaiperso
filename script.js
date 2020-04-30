"use strict";

var myInit ={method:'GET',
              headers:{'Content-Type': 'application/json'},
              mode:'cors',
              cache:'default'};

let myRequest = new Request("./myjson.json", myInit); 



fetch(myRequest)
    .then(function(res){return res.json})
    .then(function(data){console.log(data)})




