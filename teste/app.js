// app code goes here
// matrix.init()....
//
// have fun
var angulo = 0;

setInterval(function(){
    matrix.led({
        angle: angulo,
        color: 'green'
    }).render();
    angulo = angulo + 10;
}, 0);