/**
 * Copyright (c) 30/07/2016. All rights reserved. For license, see
 * "README" or "LICENSE" file.
 *
 * Check if a string (first argument, str) ends with the given target string (second argument, target).
 * This challenge can be solved with the .endsWith() method, which was introduced in ES2015.
 * But for the purpose of this challenge, we would like you to use one of the JavaScript
 * substring methods instead.
 */

function confirmEnding(str, target) {
	// "Never give up and good luck will find you."
	// -- Falcor
	var check= /\s+/g.test(str);

	if(check) {
		var arrayOfStr = str.split(' ');
		if(arrayOfStr[arrayOfStr.length-1] === target) {
			return true;
		}
		else {
			if(arrayOfStr[arrayOfStr.length-1].includes(target)) {
				if(arrayOfStr[arrayOfStr.length-1]
						.lastIndexOf(target) != -1) {
					return true;
				}
				else {
					return false;
				}
			}
		}//end of outer else tag
	}
	else {
		if(str.charAt(str.length-1) === target) {
			return true;
		}
	}

	return false;
}
confirmEnding("Open sesame", "same");
//confirmEnding("Bastian", "n");