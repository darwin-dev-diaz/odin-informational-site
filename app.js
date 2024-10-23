const http = require("http");
const url = require("url");
const fs = require("fs");

http
  .createServer((req, res) => {
    const q = url.parse(req.url, true);
    const filename = "." + q.pathname;
    const errPage = fs.readFileSync("./404.html", {
      encoding: "utf8",
      flag: "r",
    });
    console.log(filename);
    fs.readFile(filename, (err, data) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      if (err) {
        res.write(errPage);
        return res.end();
      }
      res.write(data);
      return res.end();
    });
  })
  .listen(8080);
