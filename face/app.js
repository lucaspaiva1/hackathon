matrix.led('red').render();

  matrix.service('face').start().then(function(data){
    matrix.led('green').render();
    setTimeout(function() {
      matrix.led('red').render();
    }, 1000);
  });
