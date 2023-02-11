function repeatString(string, num) {
  
  // Can't repeat negative numbers
  if (num < 0) {
    return 'ERROR';
  }
  
  // Make copy of string to return
  let repeatedString = '';
  
  for (let i = 0; i < num; i++) {
    repeatedString = repeatedString.concat('', string);
  }

  return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
