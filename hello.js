var http = require("http");

var manejador = function(solicitud, respuesta) {
	console.log("Peticion");
	respuesta.end("Hola Yair");
}

var servidor = http.createServer(manejador);

servidor.listen(8080);