import socketIo from "socket.io-client";

const socket = socketIo("http://192.168.0.5:3333", {
  autoConnect: false
});

function subscribeToNewDevs(subscribeCallback) {
  socket.on("new-dev", subscribeCallback);
}

function connect(latitude, longitude, techs) {
  socket.io.opts.query = {
    latitude,
    longitude,
    techs
  };

  socket.connect();
}

function disconnect() {
  if (socket.connected) {
    socket.disconnect();
  }
}

export { connect, disconnect, subscribeToNewDevs };
