function reverseString(string) {

  let reversed = '';

  // Loop through string backwards, and add each letter to reversed
  for (let i = string.length - 1; i >= 0; i--) {
    reversed = reversed.concat('', string[i]);
  }
  
  return reversed;
};

// Do not edit below this line
module.exports = reverseString;
