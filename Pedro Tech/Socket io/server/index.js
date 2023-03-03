const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

app.use(cors());

// *Creating http server with express
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    method: ["GET", "POST"],
  },
});

// listening to event
io.on("connection", (socket) => {
  console.log(`User connected: ${socket.id}`);

  socket.on("join_room", (data) => {
    socket.join(data);
  });

  socket.on("send_message", (data) => {
    socket.to(data.room).emit("receive_message", data);
  });

  //   socket.on("send_message", (data) => {
  //     socket.broadcast.emit("receive_message", data);
  //   });
});
//! socket.on means listening to function passed in first argument.
//! connection event is fired as soon as someone connects to the server.
//! broadcast allows us to send message to everyone connected to the server but ourself.
//! join will basically join a room with a specific value.

server.listen(5000, () => {
  console.log("Server running on port", 5000);
});
