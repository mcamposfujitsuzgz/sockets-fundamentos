var socket = io();

socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Perdimos conexion con el servidor');
});


//envia informacion
socket.emit('enviarMensaje', {
    usuario: 'Manuel',
    mensake: 'Hola...'
}, function(res) {
    console.log("Se disparo el callback  : " + res.resp);
});

// escucha informacion
socket.on('enviarMensaje', function(dd) {
    console.log(dd);
});