const exorcise = require( "./exorcise.js" );

exorcise( function drain( ){
	console.log( "cleaning" );
} );

let release = exorcise( function drain( ){
	console.log( "cleaning" );
} );

release( );
