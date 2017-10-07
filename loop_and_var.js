factorial = (n) => {
	let counter = 1;
	let result = 1;

	while (counter <= n) {
		result = result * counter;
		counter = counter + 1;
	}

	return result;
}

const smallestDivisor = (num) => {
	if (num < 1) {
		return NaN;
	}
	if (num === 1) {
		return num;
	}

	let divisor = 2;

	while (num % divisor !== 0) {
		divisor = divisor + 1;
	}

	return divisor;
};