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
    color: 'blue',
    start: 340
};

var ar = {
    angle: 0,
    color: 'blue'
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
    start: 170
};

database.ref('/hackathon/-KfOaJ1Tevv_LI99JFc8').update({ trancar: false });



users.on("value", function (snapshot) {
    var devices = snapshot.val();
    var objTemp = null;
    var x = Object.keys(devices).map(function (key) {
        objTemp = devices[key];
        objTemp.key = key;
        return objTemp;
    }).map(function (user) {
        if (user.ar) {
            ar = {
                arc: 70,
                color: 'blue',
                start: 270
            };
        } else {
            ar = {
                arc: 70,
                color: 'black',
                start: 270
            };
        }

        if (user.cafe) {
            cafe = {
                arc: 50,
                color: '#FF9933',
                start: 70
            };
        } else {
            cafe = {
                arc: 50,
                color: 'black',
                start: 70
            };
        }

        if (user.lamp) {
            lamp = {
                arc: 50,
                color: 'white',
                start: 120
            };
        } else {
            lamp = {
                arc: 50,
                color: 'black',
                start: 120
            };
        }

        if (user.trancar) {
            porta = {
                arc: 90,
                color: 'green',
                start: '170'
            };
        } else {
            porta = {
                arc: 90,
                color: 'red',
                start: '170'
            };
        }

        var test = user.tempD;
        test = test - 6;
        test = test / 2;
        test = parseInt(test);

        var brilho = 1;

        temp = {
            arc: 10 * test,
            color: 'blue',
            start: 340
        };

        matrix.led([ar, cafe, lamp, porta, temp]).render();
    });

});

matrix.service('face').start().then(function (data) {


    database.ref('/hackathon/-KfOaJ1Tevv_LI99JFc8').update({ trancar: true });

    setTimeout(function () {


    }, 2000);
});

var options = {
    refresh: 20000, //milliseconds
    timeout: 1000 //milliseconds
};

var x = 0;

matrix.init('temperature', options).then(function (data) {
    //see below for data formats


    try {
        if (parseInt(x) !== parseInt(data.value)) {
            x = parseInt(data.value);
            console.log("temperatura atual: " + x + "ºC");
            database.ref('/hackathon/-KfOaJ1Tevv_LI99JFc8').update({ temp: x });
        }
    } catch (error) {

    }


});