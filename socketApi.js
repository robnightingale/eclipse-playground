// const SocketServer = require('ws').Server;
//
// const wss = new SocketServer({ server });
//
// wss.on('connection', (ws) => {
//     console.log('Client connected');
// ws.on('close', () => console.log('Client disconnected'));
// });
//
// setInterval(() => {
//     wss.clients.forEach((client) => {
//     client.send(new Date().toTimeString());
// });
// }, 1000);

var socket_io = require('socket.io');
var io = socket_io();
var socketApi = {};

socketApi.io = io;

io.on('connection', (socket) => {
    console.log('Client connected');
    socket.on('disconnect', () => console.log('Client disconnected'));
});

setInterval(() => io.emit('time', new Date().toTimeString()), 1000);


module.exports = socketApi;
