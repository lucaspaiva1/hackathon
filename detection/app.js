// app code goes here
// matrix.init()....
//
// have fun


var algorithm = 'palm';
var options   = {
  refresh: 1000, //milliseconds
  timeout: 1000   //milliseconds
};
matrix.service( algorithm, options ).start().then(function( data ){
  // your CV detection data will be available here
  console.log( data );
  matrix.led('green').render();
  
});
