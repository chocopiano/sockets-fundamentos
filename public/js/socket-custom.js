var socket = io('http://localhost:3000');
//escuchar
socket.on('connect', () => {
    console.log('Conectados con el servidor');

});
socket.on('disconnect', () => {
    console.log('perdimos conexion con el servidor');

});

//Enivar informacion
socket.emit('enviarMensaje', {
        usuario: 'wene',
        mensaje: 'hola mundo'
    }, (resp) => {
        console.log('respuesta server:', resp);
    })
    //escuchar informacion
socket.on('enviarMensaje', (mensaje) => {
    console.log('Servidor:', mensaje);
})