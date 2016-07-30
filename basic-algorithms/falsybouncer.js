/**
 * Copyright (c) 30/07/2016. All rights reserved. For license, see
 * "README" or "LICENSE" file.
 *
 * Remove all falsy values from an array.
 * Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
 *
 */

function bouncer(arr) {
	// Don't show a false ID to this bouncer.
	arr = arr.filter(function(element){
		if(!element) {
			return false;
		}
		return true;
	});
	return arr;
}

bouncer([1, null, NaN, 2, undefined]);


 
/** ALSO TESTED INDIVIDUALLY
    function bouncer(arr) {
	  arr = arr.filter(function(element){
	    if(element === false || element === null || element === 0 || element === '' || element === undefined || Number.isNaN(element)) {
	      return false;
	    }
	      return true;
	  });
  return arr;
}

 bouncer([7, "ate", "", false, 9]);

 */