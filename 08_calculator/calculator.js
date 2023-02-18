const add = function(n, m) {
	return n + m;
};

const subtract = function(n, m) {
	return n - m;
};

const sum = function(numbers) {
	return numbers.reduce((n, m) => n + m, 0);
};

const multiply = function(numbers) {
  return numbers.reduce((n, m) => n * m, 1);
};

const power = function(number, exponent) {
	let result = 1;
  for (let i = 0; i < exponent; i++) {
    result *= number;
  }
  return result;
};

const factorial = function(n) {
	if (n == 0) return 1;
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
