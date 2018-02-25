function debounce(callback, delay) {
	let timeoutid = null;
	return function() {
		let applyFunction = function() {
			callback();
			timeoutid = null
		};
		if (timeoutid) {
			clearTimeout(timeoutid)
		}
		timeoutid = setTimeout(applyFunction, delay);
	}
}
// Example

var iterator = 0;

function increaseIteratorBy1() {
	iterator++;

	printIteratorValue();
}

function printIteratorValue() {
	console.log('Iterator value ', iterator);
}

var increaseIterator = debounce(increaseIteratorBy1, 1000);

increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator(); // Should print 'Iterator value 2'