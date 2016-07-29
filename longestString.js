/**
 * Copyright (c) 29/07/2016. All rights reserved. For license, see
 * "README" or "LICENSE" file.
 */
function findLongestWord(str) {
	str =str.toLowerCase();
	var arrayOfWords = str.split(' ');
	//console.log(arrayOfWords);
	var newArray = arrayOfWords.map(function(element) {
		return element.length;
	});
	newArray.sort(function(a,b) {
		return a-b;
	});
	console.log(newArray);
	return newArray[newArray.length-1];


}

findLongestWord("The quick brown fox jumped over the lazy dog");