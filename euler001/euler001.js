var getNumbers = function( n ) {
	n = n || 0;
	var numbers = [];
	for( var i = 1; i < n; i++ ) {
		if( i % 3 == 0 || i % 5 == 0 ) {
			numbers.push( i );
		}
	}
	return numbers;
};

var sumNumbers = function( numbers ) {
	numbers = numbers || [];
	var sum = 0;
	numbers.forEach(function( number ) {
		sum += number;
	});
	return sum;
};

var n = 1000;

console.log( sumNumbers( getNumbers( n ) ) );