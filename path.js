const fs = require("fs");
const http = require("http");
const path = require("path");

http.createServer((req, res) => {
  const filePath = path.join(__dirname, "raj.txt");

  fs.writeFile(filePath, "My name is Raj", (err) => {
    if (err) {
      res.end("Error creating file");
      return;
    }
    res.end("File created successfully");
  });
}).listen(3000, () => {
  console.log("Server running on port 3000");
});
