var firebase = require('firebase');

firebase.initializeApp({
    apiKey: "AIzaSyC4yjYlauhhKOYLWZxVkjsed3pMSC0h0Kc",
    authDomain: "setor-juventude-2b5e2.firebaseapp.com",
    databaseURL: "https://setor-juventude-2b5e2.firebaseio.com",
    storageBucket: "setor-juventude-2b5e2.appspot.com",
    messagingSenderId: "385614889653"
});


var database = firebase.database();

var users = database.ref('/hackathon');


var temp = {
    arc: 90,
    color: 'yellow',
    start: 0
};

var ar = {
    angle: 0,
    color: 'purple'
};

var cafe = {
    angle: 10,
    color: 'red'
};

var lamp = {
    angle: 10,
    color: 'red'
};

var porta = {
    arc: 90,
    color: 'red',
    start:170
};

var aux = false;

users.on("value", function(snapshot){
        var devices = snapshot.val();
        var objTemp = null;
        var x = Object.keys(devices).map(function(key){
            objTemp = devices[key];
            objTemp.key = key;
            return objTemp;
        }).map(function(user){
            if (user.ar){
                ar = {
                    arc: 70,
                    color: 'purple',
                    start: 270
                };
            } else{
                ar = {
                    arc: 70,
                    color: 'black',
                    start:270
                };
            }

            if (user.cafe){
                cafe = {
                    arc: 60,
                    color: 'brown',
                    start: 70
                };
            } else {
                cafe = {
                    arc: 60,
                    color: 'black',
                    start: 70
                };
            }

            if(user.lamp){
                lamp = {
                    arc: 50,
                    color: 'blue',
                    start: 120
                };
            } else {
                lamp = {
                    arc: 50,
                    color: 'black',
                    start: 120
                };
            }

            matrix.led([ar, cafe, lamp, porta, temp]).render();
        });
        
});

matrix.service('face').start().then(function(data) {
    
    porta = {
        arc: 90,
        color: 'green',
        start: '170'
    };
    aux = true;
    matrix.led([ar, cafe, lamp, porta, temp]).render();
    setTimeout(function() {
       if (!aux){
        porta = {
        arc: 90,
        color: 'red',
        start: '170'
        };
       }
        matrix.led([ar, cafe, lamp, porta, temp]).render();
    }, 2000);
});

