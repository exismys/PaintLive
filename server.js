const express = require('express');
const http = require('http');
const socket = require('socket.io');

const app = express();
const server = http.createServer(app);
server.listen(3000, () => {
    console.log('listening on 3000');
})
app.use(express.static('paint'));

const io = socket(server);
io.sockets.on('connection', socket => {
    console.log('new connection: ' + socket.id);
    socket.on("mousePos", (data) => {
        socket.broadcast.emit("mousePos", data);
        console.log(data);
    })
});