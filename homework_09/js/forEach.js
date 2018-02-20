function forEach (arr, callBack) {
	for (i = 0; i < arr.length; i++) {
		callBack(arr[i]);
	 } 
}

forEach([3, 5, 2], function(el) {
console.log(el);
})