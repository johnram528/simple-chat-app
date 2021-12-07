const app = require('express')();
const httpServer = require('http').createServer(app);
const io = require('socket.io')(httpServer, {
  cors: {origin : '*'}
});
const { v4: uuidv4 } = require('uuid');

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('message', (message) => {
    const updateMsg = {
			...message,
			id: uuidv4(),
			datetime: new Date()
		}
    console.log(updateMsg);
    io.emit('message', updateMsg);
  });

  socket.on('disconnect', () => {
    console.log('a user disconnected');
  });
});

httpServer.listen(3000, () => console.log('listening on port 3000'));