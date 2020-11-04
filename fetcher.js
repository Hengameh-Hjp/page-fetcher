address = process.argv.slice(2)
fs = require('fs');
const request = require('request');

request(address[0], (error, response, body) => {
  fs.writeFile(address[1], body, function (err,data) {
    if (err) {
      return console.log(err);
    }
    console.log('Length of data written is ' + body.length);
  });
});

//console.log(body)

