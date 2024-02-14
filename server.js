const http = require("http");
const net = require("net");

const clients = new Set();

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(`
    <h1>Chat System</h1>
    <form action="/send" method="post">
      <input type="text" name="message" required />
      <button type="submit">Send</button>
    </form>
  `);
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});

const io = new net.Server();

io.on("connection", (socket) => {
  clients.add(socket);
  console.log("Client connected");

  socket.on("data", (data) => {
    const message = data.toString().trim();
    if (!message) return;

    console.log(`Broadcasting: ${message}`);
    for (const client of clients) {
      if (client !== socket) {
        client.write(`${message}\n`);
      }
    }
  });

  socket.on("end", () => {
    clients.delete(socket);
    console.log("Client disconnected");
  });
});

io.listen(3001);
