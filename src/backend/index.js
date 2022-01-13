const express = require("express")
const app = express()
const cors = require("cors")
const http = require("http").Server(app)
const io = require("socket.io")(http, {cors: {origin: '*'}})
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html")
});

let interval;
io.on('connection', (socket) => {
  socket.on('chatMessage', msg => {
    console.log(msg)
    io.emit("chatMessage", msg);
  });

  if (interval) {
    clearInterval(interval);
  }
  interval = setInterval(() => getApiAndEmit(socket), 1000);
  socket.on("disconnect", () => {
    console.log("Client disconnected");
    clearInterval(interval);
  });
});

const getApiAndEmit = socket => {
  const response = new Date();
  // Emitting a new message. Will be consumed by the client
  socket.emit("FromAPI", response);
};

http.listen(3001, () => {
  console.log("listening on *:3001")
});