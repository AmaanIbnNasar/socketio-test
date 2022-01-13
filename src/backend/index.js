const express = require("express")
const app = express()
const cors = require("cors")
const http = require("http").Server(app)
const io = require("socket.io")(http, {cors: {origin: '*'}})
io.cors
app.get("/", (req, res) => {
  res.send(JSON.stringify("HELLO"))
});

io.on('connection', (socket) => {
  io.emit("fromAPI", new Date())
  io.emit("system-message", ("User"+new Date().toISOString()+" connected"))
  socket.on('chat message', msg => {
    io.emit("chat message", msg);
  });
});

http.listen(3001, () => {
  console.log("listening on *:3001")
});