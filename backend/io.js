let ioInstance;

module.exports = function(server) {
  const io = require("socket.io")(server);
  io.on("connection", socket => {
    console.log("made socket connection", socket.id);

    // Handle socket event
    socket.on("eventTrigger", function(data) {
      io.sockets.emit("chat", data);
    });

    socket.on("public", function(data) {
      io.sockets.emit("chat", data);
    });

  });

  // save in higher scope so it can be obtained later
  ioInstance = io;
  return io;
};

// this getIO method is designed for subsequent
// sharing of the io instance with other modules once the module has been initialized
// other modules can do: let io = require("./io.js").getIO();
module.exports.getIO = () => {
  if (!ioInstance) {
    throw new Error(
      "Must call module constructor function before you can get the IO instance"
    );
  }
  return ioInstance;
};