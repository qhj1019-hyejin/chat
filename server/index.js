const express = require('express');
const socketio = require('socket.io');
const http = require('http');

const PORT = process.env.PORT || 5000;

const router = require('./router');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on("connection", (socket) => {
    console.log('사용자가 연결되었습니다.');

    socket.on('disconnect',()=>{
        console.log('사용자가 나갔습니다.');
    })
});

app.use(router);

server.listen(PORT, () => console.log(`Sever has started on prt ${PORT}`));