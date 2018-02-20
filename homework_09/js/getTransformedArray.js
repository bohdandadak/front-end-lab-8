
function getTransformedArray (arr,callBack) {
	let array = [];
	forEach(arr, function(item){
		array.push(callBack(item));
	});
	return array;
}
function increment(num) { 
return num + 1;
} 
console.log(getTransformedArray([1, 7, 20], increment)); 

