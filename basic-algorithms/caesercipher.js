/**
 * Copyright (c) 31/07/2016. All rights reserved. For license, see
 * "README" or "LICENSE" file.
 *
 * Caesars Cipher
 * One of the simplest and most widely known ciphers is a Caesar cipher,
 * also known as a shift cipher. In a shift cipher the meanings of the letters
 * are shifted by some set amount.
 * A common modern use is the ROT13 cipher, where the values of the letters
 * are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
 * Write a function which takes a ROT13 encoded string as input and returns a decoded string.
 * All letters will be uppercase. Do not transform any non-alphabetic character
 * (i.e. spaces, punctuation), but do pass them on.
 *
 */
function rot13(str) { // LBH QVQ VG!


	//split into array of characters
	var arr = str.split('');

	//var letter;
	arr = arr.map(function (char) {

		return (/\W/g).test(char) ?
		       char
			: String.fromCharCode(
			char.charCodeAt(0) > 'M'.charCodeAt(0) ?
			char.charCodeAt(0) - 13
				: char.charCodeAt(0) + 13
		);

	});

	str = arr.join('');
	console.log(str);


}

// Change the inputs below to test
rot13("SERR CVMMN!");