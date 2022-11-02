
// Import http and fs 
const fs=require('fs')
const http = require( 'http')
  
// Creating Server 
http.createServer((req, res) =>{
  
    // Reading file 
    fs.readFile(`serving_files.js`, function (err,filedata) {
      if (err) {
  
        // Handling error 
        res.writeHead(404);
        res.end(JSON.stringify(err));
        return;
      }
  
      // serving file to the server 
      res.writeHead(200);
      console.log('Hello')
      res.end(filedata);
    });
}).listen(8080,'localhost');