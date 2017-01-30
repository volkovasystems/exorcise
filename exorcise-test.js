"use strict";

const exorcise = require( "./exorcise.js" );

exorcise( function drain( ){
	process.removeAllListeners( "error" );

} );
