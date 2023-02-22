const palindromes = function(string) {
  original = string.replaceAll(/[^a-zA-z]/g, '').toLowerCase();
  reversed = original.split('').reverse().join('');
  console.log(original);
  console.log(reversed);
  return original === reversed;
};

// Do not edit below this line
module.exports = palindromes;
