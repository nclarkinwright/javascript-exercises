const fibonacci = function(member) {
  // Only accept valid member 
  if (member <= 0) return 'OOPS';
  // Return 1 if looking for first two members
  if (member === 1 || member === 2) return 1;
  // Calculate the nth element of the fibonacci sequence
  let n = m = 1, next;
  for (let i = 3; i <= member; i++) {
    next = n + m;
    m = n;
    n = next;
  }

  return n;
};

// Do not edit below this line
module.exports = fibonacci;
