function getFilteredArray (arr, callback) {
	let array = [];
	forEach(arr, function(item){
		if (callback(item) == true){
			array.push(item);
		}
	});
	return array;
}

function predicateFunction(num) { 
return num > 3;
}
console.log(getFilteredArray([1, 7, 20], predicateFunction));