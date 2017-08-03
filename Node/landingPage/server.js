var http = require('http');
var fs = require('fs');
var server = http.createServer(function (request, response){
    if(request.url === '/') {
        fs.readFile('./views/index.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }else if (request.url === "/ninja") {
         fs.readFile('./views/ninja.html', 'utf8', function (errors, contents){
             response.writeHead(200, {'Content-type': 'text/html'});
             response.write(contents);
             response.end();
         });
    }else if (request.url === "/dojos/new") {
         fs.readFile('./views/dojo.html', 'utf8', function (errors, contents){
             response.writeHead(200, {'Content-type': 'text/html'});
             response.write(contents);
             response.end();
         });
    }else {
        response.writeHead(404);
        response.end('File not found!!!');
    }
});
server.listen(6789);
console.log("Running in localhost at port 6789");
