var fibonacci = function( n ) {
	var Phi = ( 1 + Math.sqrt( 5 ) ) / 2;
	var phi = -1 / Phi;
	var number = ( Math.pow( Phi, n ) - Math.pow( phi, n ) ) / Math.sqrt( 5 )
	return Math.ceil ( number );
}

var isOdd = function( n ) {
	return ( n % 2 ) != 0;
}

var sumEvenFibonacciBelow = function( maxSize ) {
	var index = 0;
	var number = fibonacci( index );
	var sum = 0;

	while( number < maxSize ) {
		if( isOdd( number ) ) {
			sum += number;
		}
		index++;
		number = fibonacci( index );
	}

	return sum;
}


console.log( sumEvenFibonacciBelow( 4000000 ) );
