// app code goes here
// matrix.init()....
//
// have fun
var options = {
  refresh: 1000, //milliseconds
  timeout: 1000 //milliseconds
};

matrix.init('temperature', options).then(function(data){
    console.log(data.value);
  //see below for data formats
});