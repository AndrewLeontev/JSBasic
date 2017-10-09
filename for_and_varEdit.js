//isPrime? 
cons isPrime = (num) => {
    if (num < 2) {
    	return false;
    }

    for (let i = 2; i < num; i++) {
    	if (num % i === 0) {
    		return false;
    	}
    }

    return true;
};

switch(num) {
	case 1:
	    answer = "One";
	    break;

	case 2: 
	    answer = "Two";
	    break;

	default: 
	    answer = "nothing";
	    break;
}

switch(num) {
	case 10:
	case 11:
        answer = "Good";
        break;
    case 12:
        answer = "Better!";
        break;
    default:
        answer = "Bad...";
        break;
}