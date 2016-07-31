/**
 * Copyright (c) 29/07/2016. All rights reserved. For license, see
 * "README" or "LICENSE" file.
 */

function palindrome(str) {
	// Good luck!
	var myRegExp = /(\W|\_)/ig;
	str = str.replace(myRegExp,"");
	str = str.toLowerCase();
	var arrayOfStr = str.split('');

	var size = arrayOfStr.length;
	var ARRAY_SIZE = size-1;
	var i = 0;
	var result;
	var checkpalindrome = function cp(i) {
		var bool;
		if(i === ARRAY_SIZE) {
			bool =  true;
			return bool;
		}
		if (arrayOfStr[i] === arrayOfStr[ARRAY_SIZE-i]) {
			bool = checkpalindrome(i+1);
		}
		else {
			bool =  false;
			return bool;
		}
		return bool;
	};
	result = checkpalindrome(i);

	return result;
}
console.log(palindrome("eye1e"));

console.log(palindrome("race Car"));


/** EASIER WAY THAN MINE
 function palindrome(str) {
	// Good luck!

	//remove whitespace and non word characters including underscore
	var myRegExp = /(\W|\_)/ig;
	str = str.replace(myRegExp,"");
	str = str.toLowerCase();

	//split the string into an array, reverse it and join them back together
	var arrayOfStr = str.split('');
	var str2 = arrayOfStr.reverse().join('');

    if(str != str2) {
  	    return false
    }

    return true;
};
 **/

/**
 ---- Another easy method of solving the problem --- taken from mozilla docs
 var str = '12345';
 Array.prototype.map.call(str, function(x) {
  return x;
}).reverse().join('');

 // Output: '54321'
 // Bonus: use '===' to test if original string was a palindrome

 **/