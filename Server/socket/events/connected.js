const event = (socket) => {
  socket.emit("connected", "data");
};

module.exports = event;
