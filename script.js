"use strict";

// var myInit ={method:'GET',
//               headers:{'Content-Type': 'application/json'},
//               mode:'cors',
//               cache:'default'};

// let myRequest = new Request("./myjson.json", myInit); 



// fetch(myRequest)
//     .then(function(res){return res.json})
//     .then(function(data){console.log(data)})





    var inputfile = document.getElementById('file')
    inputfile.addEventListener("change",handleFile)
    function handleFile(files){
              var myfile = files[0];
               if(myfile) {console.log(myfile)
                 let formData = new FormData();
                formData.append("myfile", myfile);
                fetch('./download', {method: "POST", body: formData});
       }
    }

    function myfunction(){
        console.log('toto')
}