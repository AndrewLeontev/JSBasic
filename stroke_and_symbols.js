const reverse = (str) => {
	let iter = --str.length;
	let result = '';

	while (iter >= 0) {
		result += str[iter];
		iter--;
	}

	return result;
};

console.log(reverse('cat'));