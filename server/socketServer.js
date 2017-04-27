const io = require('socket.io');
const liveChannel = require('./models/channel');
const metrics = require('./models/metrics');

module.exports = function (server) {
  const socketServer = io(server);
  // const connections = [];

  socketServer.on('connection', socket => {
    // connections.push(socket);

    socket.on('room', channel => {
      socket.join('room-' + channel);
    });

    socket.on('fetchMatrix', data => {
      // TODO: require some function here and pass the data.presentation_id to the function as argument,
      // then broadcast the return result to everyone in the room
      metrics.getMetricsData(data.presentation_id, (err, metricsData) => {
        if (err) {
          console.error('Error in getMetricsData', err);
        }
        console.log('this is the getMetricsData return data: ', metricsData);
        let d = { data: metricsData };
        socket.broadcast.to('room-' + data.channel).emit('fetchMatrix', d);
      })
    });

    socket.on('broadcastSlide', data => {
      socket.broadcast.to('room-' + data.channel).emit('broadcastSlide', data.maxSlideIndex);
    });

    socket.on('redirect', data => {
      liveChannel.deleteChannel( data.channel );
      socket.broadcast.to('room-' + data.channel).emit('redirect', data.status);
    });

    // socket.on('disconnect', () => {
      // const index = connections.indexOf(socket);
      // connections.splice(index, 1);
    // });
  });
};
