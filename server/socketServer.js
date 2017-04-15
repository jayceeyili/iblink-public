const io = require('socket.io');

module.exports = function (server) {
  const socketServer = io(server);
  const connections = [];

  socketServer.on('connection', socket => {
    connections.push(socket);

    socket.on('broadcastSlide', data => {
      console.log(`Socket received new url: ${ data }`);
      connections.forEach(connectedSocket => {
        if (connectedSocket !== socket) {
          connectedSocket.emit('broadcastSlide', data);
        }
      });
    });

    socket.on('redirect', data => {
      console.log(`Socket received new status: ${ data }`);
      connections.forEach(connectedSocket => {
        if (connectedSocket !== socket) {
          connectedSocket.emit('redirect', data);
        }
      });
    });

    socket.on('disconnect', () => {
      const index = connections.indexOf(socket);
      connections.splice(index, 1);
    });
  });
};
