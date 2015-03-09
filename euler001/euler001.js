var getNumbers = function( n ) {
	var promise = new Promise( function( resolve, reject ) {
		if( n ) {
			var numbers = [];
			for( var i = 1; i < n; i++ ) {
				if( i % 3 == 0 || i % 5 == 0 ) {
					numbers.push( i );
				}
			}
			resolve( numbers );
		} else {
			reject( 'there is no range of number' );
		}
	});
	return promise;
};

var sumNumbers = function( numbers ) {
	var promise = new Promise( function( resolve, reject ) {
		if( numbers ) {	
			var sum = 0;
			numbers.forEach(function( number ) {
				sum += number;
			});
			resolve( sum );
		} else {
			reject( 'there is no array of numbers to sum' );
		}
	});
	return promise;
};

var n = 1000;
getNumbers( n ).then( sumNumbers ).then( console.log );
