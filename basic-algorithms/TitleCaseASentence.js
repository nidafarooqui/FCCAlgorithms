/**
 * Copyright (c) 29/07/2016. All rights reserved. For license, see
 * "README" or "LICENSE" file.
 */
function titleCase(str) {
	var arrayOfWords = str.split(' ');
	console.log(arrayOfWords);
	var strArray = arrayOfWords.map(function(element) {
		var newElement = element.charAt(0).toUpperCase();
		for(var i = 1; i<element.length; i++) {
			newElement+= element.charAt(i);
		}

		return newElement;
	});
	console.log(strArray);
	str = strArray.join(' ');
	console.log(str);
	return str;
}

titleCase("I'm a little tea pot");

