const fs = require("fs");
const path = require("path");
const events = {};

const eventsPath = path.resolve(__dirname);

fs.readdir(eventsPath, (err, files) => {
  if (err) {
    process.exit(1);
  }

  files.map((file) => {
    if (
      file.indexOf(".") !== 0 &&
      file !== "index.js" &&
      file.slice(-3) === ".js"
    ) {
      const key = file.slice(0, file.length - 3);
      events[key] = require(path.resolve(__dirname, file));
    }
  });
});

module.exports = events;
