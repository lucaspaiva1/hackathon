matrix.led('purple').render();

<<<<<<< HEAD
matrix.init('temperature', options).then(function(data){
    console.log(data);
  //see below for data formats
});
=======
matrix.service('face').start().then(function(data){
  matrix.led('green').render();
  setTimeout(function() {
    matrix.led('black').render();
  },2000);
});
>>>>>>> c88358296bbb4a953e878d9d10b7861fbd38fa9e
