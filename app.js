function partial(fn /*, args...*/) {
	// A reference to the Array#slice method.
	var slice = Array.prototype.slice;
	// Convert arguments object to an array, removing the first argument.
	var args = slice.call(arguments, 1);

	return function() {
		// Invoke the originally-specified function, passing in all originally-
		// specified arguments, followed by any just-specified arguments.
		return fn.apply(this, args.concat(slice.call(arguments, 0)));
	};
}

// Add all arguments passed in by iterating over the `arguments` object.
function addAllTheThings() {
	var sum = 0;
	for (var i = 0; i < arguments.length; i++) {
		sum += arguments[i];
	}
	return sum;
}

console.log(addAllTheThings(1, 2));            // 3
console.log(addAllTheThings(1, 2, 3));         // 6
console.log(addAllTheThings(1, 4, 9, 16, 25)); // 55

// More specific functions.
var addOne = partial(addAllTheThings, 1);
console.log(addOne());                          // 1
console.log(addOne(2));                        // 3
console.log(addOne(2, 3));                     // 6
console.log(addOne(4, 9, 16, 25));             // 55

var addTen = partial(addAllTheThings, 1, 2, 3, 4);
console.log(addTen());                         // 10
console.log(addTen(2));                        // 12
console.log(addTen(2, 3));                     // 15
console.log(addTen(4, 9, 16, 25));