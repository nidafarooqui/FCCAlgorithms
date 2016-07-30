/**
 * Copyright (c) 30/07/2016. All rights reserved. For license, see
 * "README" or "LICENSE" file.
 *
 * Chunky Monkey
 * Write a function that splits an array (first argument) into groups
 * the length of size (second argument) and returns them as a two-dimensional array.
 *
 */
function chunkArrayInGroups(arr, size) {
	// Break it up.
	var arrOfArr = [];
	var chunk = [];
	var index = 0;
	var newSize = size;
	for(var i = 0; i< arr.length/size; i++) {
		if(newSize > arr.length-1) {
			chunk =  arr.slice(index);

		}
		else {
			chunk =  arr.slice(index,newSize);
			newSize =  newSize + size;
			index = index + size;

		}
		arrOfArr.push(chunk);
	}


	return arrOfArr;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2);

 
