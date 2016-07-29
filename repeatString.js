/**
 * Copyright (c) 30/07/2016. All rights reserved. For license, see
 * "README" or "LICENSE" file.
 *
 * Repeat a string repeat a string
 * Repeat a given string (first argument) num times (second argument).
 * Return an empty string if num is not a positive number.
 */

function repeatStringNumTimes(str, num) {
	// repeat after me
	var newStr ='';
	for(var i=0; i<num; i++) {
		newStr = newStr.concat(str);
	}
	return newStr;
}

repeatStringNumTimes("abc", 3);
