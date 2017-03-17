matrix.led('purple').render();

matrix.service('face').start().then(function(data){
  matrix.led('green').render();
  setTimeout(function() {
    matrix.led('black').render();
  },2000);
});
