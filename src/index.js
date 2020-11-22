var http = require("http");
const fs = require("fs");
const util = require("util");

//create a server object:
// http
//   .createServer(function (req, res) {
//     res.write("Hello World!"); //write a response to the client
//     res.end(); //end the response
//   })
//   .listen(8080); //the server object listens on port 8080

const readFilePromise = (path, encoding) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, encoding, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};
// fs.readFile(__filename, "utf-8", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });

// readFilePromise("demi.txt", "utf-8")
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

const readFile = util.promisify(fs.readFile);
readFile("__filename", "utf-8")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
