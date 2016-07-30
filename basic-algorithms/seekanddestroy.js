/**
 * Copyright (c) 30/07/2016. All rights reserved. For license, see
 * "README" or "LICENSE" file.
 *
 * Seek and Destroy
 *
 * You will be provided with an initial array (the first argument in the destroyer function),
 * followed by one or more arguments. Remove all elements from the initial array that are of
 * the same value as these arguments.
 *
 */

function destroyer(arr) {
	// Remove all the values
	var initialArr = Array.prototype.shift.apply(arguments);
	var args = Array.prototype.slice.call(arguments);
	var bool;

	args.forEach(function eachArg(value) {
		initialArr = initialArr.filter(function check(element) {
			return (element !== value);
		});
	});

	return initialArr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);



 
