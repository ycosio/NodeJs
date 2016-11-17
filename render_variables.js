var html = require("http"),
	fs = require("fs");

html.createServer(function(req,res){
	fs.readFile("./index.html",function(err,html){

		var html_string = html.toString();
		var expresionR = html_string.match(/[^\{\}]+(?=\})/g﻿);
		var nombre = "Yair";

		for (var i = expresionR.length - 1; i >= 0; i--) {
			var value = eval(expresionR[i]);
			html_string = html_string.replace("{"+expresionR[i]+"}",value);
		}

		res.writeHead(200,{"Content-Type":"text/html"});
		res.write(html_string);
		res.end();
	});
}).listen(8080);