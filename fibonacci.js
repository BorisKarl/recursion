// Iteration
const fiboIter = (n) => {
  let iterArray = [0, 1];
  for (let i = 2; i < n; i++) {
    iterArray.push(iterArray[i - 1] + iterArray[i - 2]);
  }
  return iterArray;
};



// Recursion
const fiboRecursion = (n, array = [0, 1, 1]) => {
  if (n === 3) {
    return array;
  } else {
    for (let i = 3; i < n; i++) {
      array.push(array[i - 1] + array[i - 2]);
    }
    array = fiboRecursion(n - 1, array);
  }
  return array;
};
