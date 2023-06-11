const http = require("http");

http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write("Hello, I'm MADHURI");
    res.end();
  } else if (req.url === '/about') {
    res.end("I'm the about section, yaar");
  } else {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`<h1>Please type / or /about to make me disappear</h1>`);
  }
}).listen(5500);
const _=require("")