/**
 * Copyright (c) 30/07/2016. All rights reserved. For license, see
 * "README" or "LICENSE" file.
 * Truncate a string
 *
 * Truncate a string (first argument) if it is longer than the given
 * maximum string length (second argument). Return the truncated string with a ... ending.
 *
 * Note that inserting the three dots to the end will add to the string length.
 * However, if the given maximum string length num is less than or equal to 3,
 * then the addition of the three dots does not add to the string length in determining the truncated string.
 *
 */
function truncateString(str, num) {
	// Clear out that junk in your trunk
	var newStr = str;
	if(str.length > num) {
		newStr = str.slice(0,num-3)+ "...";
	}
	if(num <= 3) {
		newStr = str.slice(0,num)+ "...";
	}
	return newStr;
}

truncateString("Absolutely Longer", 2);
