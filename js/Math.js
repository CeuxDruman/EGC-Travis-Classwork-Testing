function sumar() {
	var result = 0;

	for (var i = 0; i < arguments.length; i++) {
		argument = arguments[i];
		if ( typeof argument === "object" ) {
			for (var j = 0; j < argument.length; j++) {
				result += argument[j];
			}
		} else {
	    	result += arguments[i];
		}
	}

	return result;
}