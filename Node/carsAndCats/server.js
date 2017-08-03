var http = require('http');
var fs = require('fs');

let server = http.createServer(function(request,response){
    if(request.url === '/cars') {
        fs.readFile('./views/index.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }else if(request.url === '/cats') {
        fs.readFile('./views/cats.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }else if(request.url === '/cars/new') {
        fs.readFile('./views/newCar.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }else if (request.url === "/style") {
         fs.readFile('./stylesheet/style.css', 'utf8', function (errors, contents){
             response.writeHead(200, {'Content-type': 'text/css'});
             response.write(contents);
             response.end();
         });
    }else if(request.url == "/images/car1.jpg"){
        rImg("./images/car1.jpg",response);
    }else if(request.url == "/images/car2.jpg"){
        rImg("./images/car2.jpg",response);
    }else if(request.url == "/images/car3.jpg"){
        rImg("./images/car3.jpg",response);
    }else if(request.url == "/images/car4.jpg"){
        rImg("./images/car4.jpg",response);
    }else if(request.url == "/images/car5.jpg"){
        rImg("./images/car5.jpg",response);
    }else if(request.url == "/images/car6.jpeg"){
        rImg("./images/car6.jpeg",response);
    }else if(request.url == "/cat1"){
        rImg("./images/cat1.jpeg",response);
    }else if(request.url == "/cat2"){
        rImg("./images/cat2.jpg",response);
    }else if(request.url == "/cat3"){
        rImg("./images/cat3.jpeg",response);
    }else if(request.url == "/cat4"){
        rImg("./images/cat4.jpg",response);
    }
});

let rImg   = function(request,response){
    fs.readFile(request,function(errors,contents){
        response.writeHead(200,{ContentType:"image/*"});
        response.write(contents);
        response.end();
    })
}
server.listen(6789);
console.log("Running in localhost at port 6789");
