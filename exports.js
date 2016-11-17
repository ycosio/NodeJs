var http = require("http"),
	fs = require("fs"),
	parser = require("./parse_parameter.js"),
	renderer = require("./render.js");

http.createServer(function(req,res){

	if(req.url.indexOf("favicon.ico") > 0)
	return;

	var parse = parser.parse(req);

	fs.readFile("./index.html",function(err,html){
		res.writeHead(200,{"Content-Type":"text/html"});
		res.write(renderer.render(html,parse));
		res.end();
	});

}).listen(8080);