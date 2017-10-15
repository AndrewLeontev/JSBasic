const arSum = (num) => {
  let str = String(num).split("");
  let res = 0;
  for (let i = 0; i<str.length; i++) {
    res += Number(str[i]);
  }
  return res;
};
const addDigits = (number) => {
  while (number >= 10) {
    number = arSum(number);
  }
  return number;
};
console.log(arSum(24));
console.log(addDigits(24));