const { io } = require('../server')
io.on('connection', (client) => {
    console.log("new connection");
    client.emit('enviarMensaje', {
        usuario: 'admin',
        mensaje: 'bienvenido a esta aplicacion'
    });
    client.on('disconnect', () => {
        console.log('usuario desconectado');
    });
    //escuchar al cliente
    client.on('enviarMensaje', (data, callback) => {

        console.log(data);
        client.broadcast.emit('enviarMensaje', {
                usuario: data.usuario,
                mensaje: data.mensaje
            })
            //     if (mensaje.usuario) {
            //         callback({
            //             resp: 'Todo salio bien'
            //         })
            //     } else {
            //         callback({
            //             resp: 'todo salio mal'
            //         });
            //     }

        //     callback();
    });

})