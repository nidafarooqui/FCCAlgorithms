/**
 * Copyright (c) 30/07/2016. All rights reserved. For license, see
 * "README" or "LICENSE" file.
 * Mutations
 *
 * Return true if the string in the first element of the array contains all of the
 * letters of the string in the second element of the array.
 *
 * For example, ["hello", "Hello"], should return true because all of the letters
 * in the second string are present in the first, ignoring case.
 *
 * The arguments ["hello", "hey"] should return false because
 * the string "hello" does not contain a "y".
 *
 * Lastly, ["Alien", "line"], should return true because all
 * of the letters in "line" are present in "Alien".
 */

function mutation(arr) {

	arr= arr.map(function(element) {
		return element.toLowerCase();
	});

	var lastIndex = arr.length-1;
	var lastElement = arr[lastIndex];
	var firstElement = arr[0];
	var letter;


	for(var i=0; i<lastElement.length; i++) {
		letter = lastElement.charAt(i);
		if(firstElement.indexOf(letter) === -1) {
			return false;
		}
	}
	return true;
}

mutation(["Mary", "Aarmy"]);
