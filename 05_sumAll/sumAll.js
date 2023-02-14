const sumAll = function(n, m) {

  if (n < 0 || m < 0 || typeof n !== 'number' || typeof m !== 'number') {
    return 'ERROR';
  }

  let sum = 0;
  const higher = n >= m ? n : m;
  const lower = m <= n ? m : n;

  for (let i = lower; i <= higher; i++) {
    sum += i;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
