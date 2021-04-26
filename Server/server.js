const express = require("express");
const http = require("http");
const socketIO = require("socket.io");

const initSocketIO = require("./socket/listeners");

const app = express();

const server = http.createServer(app);

const io = socketIO(server, {
  cors: {
    origin: "*",
  },
});

initSocketIO(io);

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
