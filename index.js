const http = require("http");

const PORT = 3000;

const requestListener = (req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello from dev-feature branch! 🌱");
};

const server = http.createServer(requestListener);

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
