const fs = require("fs");
const path = require("path");

module.exports = (io) => {
  const listenersPath = path.resolve(__dirname);

  fs.readdir(listenersPath, (err, files) => {
    if (err) {
      process.exit(1);
    }

    files.map((file) => {
      if (file !== "index.js") {
        const listener = require(path.resolve(__dirname, file));
        listener(io);
      }
    });
  });
};
