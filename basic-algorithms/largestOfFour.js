/**
 * Copyright (c) 30/07/2016. All rights reserved. For license, see
 * "README" or "LICENSE" file.
 *
 * Return Largest Numbers in Arrays
 *
 * Return an array consisting of the largest number from each provided sub-array.
 * For simplicity, the provided array will contain exactly 4 sub-arrays.
 **/


function largestOfFour(arr) {
	// You can do this!
	var newArr = arr.map(function(element) {
		element.sort(function(a,b) {
			return a-b;
		});
		return element[arr.length-1];
	});

	return newArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
