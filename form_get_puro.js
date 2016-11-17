var http = require("http"),
	fs = require("fs");

http.createServer(function(req,res){
	if(req.url.indexOf("favicon.ico") > 0)
		return;

	fs.readFile("./index.html",function(err,html){
		var html_string = html.toString();
		var variables = html_string.match(/[^\{\}]+(?=\})/g﻿);
		var parametros = [], params = {};	
		
		if(req.url.indexOf("?") > 0)
			parametros = (req.url.split("?"))[1].split("&");

		for (var i = parametros.length - 1; i >= 0; i--) {
			var param_data = parametros[i].split("=");
			params[param_data[0]] = param_data[1];
		}

		for (var i = variables.length - 1; i >= 0; i--) {
			html_string = html_string.replace("{"+variables[i]+"}",params[variables[i]]);
		}

		res.writeHead(200,{"Content-Type":"text/html"});
		res.write(html_string);
		res.end();
	});
}).listen(8080);