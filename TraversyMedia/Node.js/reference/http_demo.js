const http = require("http");

// Create a server object
http
  .createServer((req, res) => {
    // Write response
    res.write(
      "Hello World!\nThis is my first ever server and I can't f*ing believe it!"
    );
    res.end();
  })
  .listen(5000, () => console.log("Server running..."));
