var http= require('http');
var fs= require('fs');
var path= require('path');
http.createServer(function(req,res){
    if(req.url==="/"){
        fs.readFile("./static/index.html","UTF-8", function(err,html){
            res.writeHead(200,{"Content-Type":"text/html"});
            res.end(html);
        });
    }else if(req.url==="/about"){
        fs.readFile("./static/about.html","UTF-8",function(err,html){
            res.writeHead(200,{"Content-Type":"text/html"});
            res.end(html);
        });
    }else if(req.url==="/live"){
        fs.readFile("./static/live.html","UTF-8",function(err,html){
            res.writeHead(200,{"Content-Type":"text/html"});
            res.end(html);
        });
    }else if(req.url==="/face"){
        fs.readFile("./static/face.html","UTF-8",function(err,html){
            res.writeHead(200,{"Content-Type":"text/html"});
            res.end(html);
        });
    }else if(req.url==="/feature"){
        fs.readFile("./static/feature.html","UTF-8",function(err,html){
            res.writeHead(200,{"Content-Type":"text/html"});
            res.end(html);
        });
    }else if(req.url==="/exp"){
        fs.readFile("./static/exp.html","UTF-8",function(err,html){
            res.writeHead(200,{"Content-Type":"text/html"});
            res.end(html);
        });
    }
    else if(req.url==="/mask"){
        fs.readFile("./static/mask.html","UTF-8",function(err,html){
            res.writeHead(200,{"Content-Type":"text/html"});
            res.end(html);
        });
    }
    else if(req.url.match("\.css$")){
        var cssPath = path.join(__dirname,'static',req.url);
        var fileStream = fs.createReadStream(cssPath, "UTF-8");
        res.writeHead(200,{"Content-Type":"text/css"});
        fileStream.pipe(res);
    }else if(req.url.match("\.png$")){
        var imagePath= path.join(__dirname,'static',req.url);
        var fileStream = fs.createReadStream(imagePath);
        res.writeHead(200,{"Content-Type":"image/png"});
        fileStream.pipe(res);
    }else{
        res.writeHead(404,{"Content-Type":"text/html"});
        res.end("no page found");
    }

}).listen(3000);