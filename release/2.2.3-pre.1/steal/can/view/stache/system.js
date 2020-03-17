/*!
 * CanJS - 2.2.3-pre.0
 * http://canjs.com/
 * Copyright (c) 2015 Bitovi
 * Thu, 02 Apr 2015 20:20:11 GMT
 * Licensed MIT
 */

/*can@2.2.3-pre.0#view/stache/system*/
"format steal";
steal("can/view/stache", "can/view/stache/intermediate_and_imports.js",function(stache, getIntermediateAndImports){

	function translate(load) {
		var intermediateAndImports = getIntermediateAndImports(load.source);
		
		intermediateAndImports.imports.unshift('can/view/stache/stache');
		
		return "define("+JSON.stringify(intermediateAndImports.imports)+",function(stache){" +
			"return stache(" + JSON.stringify(intermediateAndImports.intermediate) + ")" +
		"})";
	}

	return {
		translate: translate
	};

});

