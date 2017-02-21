"use strict";

/*;
	@module-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2017 Richeve Siodina Bebedor
		@email: richeve.bebedor@gmail.com

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
	@end-module-license

	@module-configuration:
		{
			"package": "exorcise",
			"path": "exorcise/exorcise.js",
			"file": "exorcise.js",
			"module": "exorcise",
			"author": "Richeve S. Bebedor",
			"contributors": [
				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>"
			],
			"eMail": "richeve.bebedor@gmail.com",
			"repository": "https://github.com/volkovasystems/exorcise.git",
			"test": "exorcise-test.js",
			"global": true
		}
	@end-module-configuration

	@module-documentation:
		Cleanse as you exit.

		Register handler to exit, SIGTERM and SIGINT but will only run once.
	@end-module-documentation

	@include:
		{
			"called": "called",
			"falzy": "falzy",
			"protype": "protype",
			"zelf": "zelf"
		}
	@end-include
*/

const called = require( "called" );
const falzy = require( "falzy" );
const protype = require( "protype" );
const zelf = require( "zelf" );

const exorcise = function exorcise( procedure ){
	/*;
		@meta-configuration:
			{
				"procedure:required": "function"
			}
		@end-meta-configuration
	*/

	if( falzy( procedure ) || !protype( procedure, FUNCTION ) ){
		throw new Error( "invalid procedure" );
	}

	procedure = called.bind( zelf( this ) )( procedure );

	process.once( "exit", procedure );
	process.once( "SIGTERM", procedure );
	process.once( "SIGINT", procedure );
};

module.exports = exorcise;
