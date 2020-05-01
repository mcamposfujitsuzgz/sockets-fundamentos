const { io } = require('../server');

io.on('connection', (client) => {
    console.log('Usuario conectado');

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });


    client.on('enviarMensaje', (datos, callback) => {
        console.log(datos);

        client.broadcast.emit('enviarMensaje', { info: 'Todos lo reciben' });

        if (datos.usuario) {
            callback({ resp: 'TODO SALIO BIEN' });
        } else {
            callback({ resp: 'TODO SALIO MAL' });
        }
        //callback();
    });

    client.emit('enviarMensaje', {
        usuario: 'Admin',
        mensaje: 'Bienvenido a la App'
    });
});