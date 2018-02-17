function isPrime(num) {
	if (num >= 2) {
		for (var i = 2; i < num; i++) {
			if (num % i === 0) {
				return false;
			}
		}
		return true;
	} else {
		return false;
	}
}

// console.log(isPrime(5));