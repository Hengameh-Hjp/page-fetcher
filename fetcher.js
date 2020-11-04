address = process.argv.slice(2)
fs = require('fs');
const request = require('request');

request(address[0], (error, response, body) => {
  fs.writeFile(address[1], body, function (err,data) {
    if (err) {
      return console.log(err);
    }
    console.log(`Downloaded and saved ${body.length} bytes to ${address[1]}`);
  });
});

//console.log(body)

