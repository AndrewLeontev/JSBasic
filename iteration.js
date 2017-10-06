const factorial = (n) => {
	const iter = (counter, acc) => {
		if (counter === 1) {
			return acc;
		}
		return iter(counter-1, counter * acc);
	}

	return iter(n, 1);
}


//smallest divisor
const smallestDivisor = (num) => {
	const iter = (acc) => {
		if (acc > num/2) {
			return num;
		}
		if (num % acc === 0) {
			return acc;
		}
		return iter(acc + 1);
	};

    return iter(2);
}

console.log(smallestDivisor(17));