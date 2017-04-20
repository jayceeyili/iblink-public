const io = require('socket.io');
const channel = require('./models/channel');

module.exports = function (server) {
  const socketServer = io(server);
  const connections = [];

  socketServer.on('connection', socket => {
    connections.push(socket);

    socket.on('room', channel => {
      console.log('received new channel', channel);
      socket.join( 'room-' + channel );
    });

    socket.on('broadcastSlide', data => {
      console.log(`Socket received new maxSlide: ${ data }`);
      connections.forEach(connectedSocket => {
        if (connectedSocket !== socket) {
          connectedSocket.to( 'room-' + data.channel ).emit('broadcastSlide', data);
        }
      });
    });

    socket.on('redirect', data => {
      console.log(`Socket received new status: ${ data }`);
      channel.deleteChannel( data.channel );
      connections.forEach(connectedSocket => {
        if (connectedSocket !== socket) {
          connectedSocket.emit('redirect', data.status);
        }
      });
    });

    socket.on('disconnect', () => {
      const index = connections.indexOf(socket);
      connections.splice(index, 1);
    });
  });
};
