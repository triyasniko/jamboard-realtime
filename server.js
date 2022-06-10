const http = require("http");
const { Server } = require("socket.io");
const app = require("./app");

const server = http.createServer(app);
const port = process.env.PORT || 8000;

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000", // TODO: Ganti jadi URL react-mu
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("User Online");

  socket.on("disconnect", () => {
    console.log("User Disconnected");
  });

  socket.on("canvas-data", (data) => {
    // console.log(data);
    socket.broadcast.emit("canvas-data", data);
  });
});

server.listen(port, () => {
    console.log(`Server is on, Listening on port ${port}`);
});
  