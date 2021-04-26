const events = require("../events");

module.exports = (io) => {
  io.on("connection", (socket) => {
    console.log("alo", socket.id);
    events.connected(socket);
  });
};
