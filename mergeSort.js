// Recursion 


const mergeSort = (a) => {
  if (a.length === 1) {
    return a;
  } else {
    let mitte = Math.floor(a.length / 2);
    let leftSide = a.slice(0, mitte);
    let rightSide = a.slice(mitte);
    return merge(mergeSort(leftSide), mergeSort(rightSide));
  }
};

const merge = (a, b) => {
  const result = [];
  let i = 0;
  let j = 0;

  while (i < a.length && j < b.length) {
    if (a[i] < b[j]) {
      result.push(a[i]);
      i++;
    } else {
      result.push(b[j]);
      j++;
    }
  }
  return [
            ...result,
            ...a.slice(i),
            ...b.slice(j),
                            ];
};

console.log(mergeSort([123, 321, 23, 32, 21, 22, 234, 1, 2, 45]));


/*
const mergeSort = (arr) => {
  if (arr.length < 2) return arr;

  let midIndex = Math.floor(arr.length / 2);
  let leftArr = arr.slice(0, midIndex);
  let rightArr = arr.slice(midIndex);

  return merge(mergeSort(leftArr), mergeSort(rightArr));
};

const merge = (leftArr, rightArr) => {
  const output = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    const leftEle = leftArr[leftIndex];
    const rightEle = rightArr[rightIndex];

    if (leftEle < rightEle) {
      output.push(leftEle);
      leftIndex++;
    } else {
      output.push(rightEle);
      rightIndex++;
    }
  }

  return [
    ...output,
    ...leftArr.slice(leftIndex),
    ...rightArr.slice(rightIndex),
  ];
};

console.log(mergeSort([2, 0, 1, 4, 2, 5, 5, 8, 234, 123, 7, 8, 44, 22]));

*/
