var NCMB = require("ncmb");
var exec = require("child_process").exec,
     child;

var app_key = "756b1daf9fec0415980c27527ffc3bda367dac55314756ad760c3095e3983f90";
var client_key = "143921116f66ecb1f39062f21ff7bb7d5fbea8698b3146eb7b73d82b85abaa8c";
var ncmb = new NCMB(app_key, client_key);

var books = ncmb.DataStore("Books");

setInterval(function(){
 exec('sudo python3 /home/pi/funhacks/measure.py',function(error,stdout,stderr){
   if(stdout){
     var Books = new books({cm:stdout});
    if(stdout<42){
      Books.save()
        .then(function(cm){
         console.log(stdout);
       })
      .catch(function(err){
         console.log(err);
       }); 
     }

    }
   if(stderr){
     console.log(stderr);
    }
   if(error !== null){
     console.log(error);
    }
  });
},500);