function parse(req){

	var parametros = [], params = {};

		if(req.url.indexOf("?") > 0)
		{
			parametros = (req.url.split("?")[1]).split("&");

			for (var i = parametros.length - 1; i >= 0; i--) {
				var data_parametros = parametros[i].split("=");
				params[data_parametros[0]] = data_parametros[1];
			}
		}
		else
			return null;
	return params;
}

module.exports.parse = parse;