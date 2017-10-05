const surfaceAreaCalculator = (radius) => {
    return 4 * 3.14 * square(radius);
}

const square = (num) => {
    return num * num;
}

const factorial = (n) => {
    if (n === 1) {
        return 1;
    } else {
        return n * factorial(n-1);
    }
}

const answer = factorial(3);
console.log(answer); 

const product = (n) => {
	if (n === 5) {
		return n;
	}

	return n * product(n + 1);
};
console.log(product(2));

const sequenceSum = (begin, end) => {
	if (begin === end) {
		return begin;
	} else if (begin > end) {
		return NaN;
	}

	return begin + sequenceSum(begin + 1, end);
};
console.log(sequenceSum(2, 6));