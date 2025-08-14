const Calculate = {
   factorial(n) {
  if (n === 0 || n === 1) {
    return 1;          // <-- base case: stops recursion
  } else {
  return n * Calculate.factorial(n - 1);  // <-- recursive call. Uses Calculate.factorial to call itself as it is in an object. 
  }
}
}

module.exports = Calculate;


