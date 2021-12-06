const app = require('express')();
const httpServer = require('http').createServer(app);
const io = require('socket.io')(httpServer, {
  cors: {origin : '*'}
});

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('message', (message) => {
    console.log(message);
    io.emit('message', message);
  });

  socket.on('disconnect', () => {
    console.log('a user disconnected');
  });
});

httpServer.listen(3000, () => console.log('listening on port 3000'));