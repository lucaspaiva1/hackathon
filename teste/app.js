// app code goes here
// matrix.init()....
//
// have fun
var options = {
  refresh: 1000, //milliseconds
  timeout: 1000 //milliseconds
};

matrix.init('temperature', options).then(function(data){
    console.log(JSON.stringify(data).toString());
  //see below for data formats
});