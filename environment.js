const bigLettersCount = (str) => {
  // BEGIN (write your solution here)
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    let letter = str[i].toUpperCase();
    if (str[i] === letter) {
      count += 1;
    }

  }
  console.log(count);
  return count;
  // END
};


const compare = (first, second) => {
  const firstCount = bigLettersCount(first);
  const secondCount = bigLettersCount(second);

  // BEGIN (write your solution here)
  if (firstCount > secondCount) {
    return 1;
  } else if (firstCount < secondCount) {
    return -1;
  } else if (firstCount === secondCount) {
    return 0;
  }
  // END
};
console.log(compare('AD', 'ad sd'));