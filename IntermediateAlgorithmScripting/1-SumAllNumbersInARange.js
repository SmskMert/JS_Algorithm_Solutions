function sumAll(arr) {
  let fixedArr = [];

  if (arr[0] < arr[1]) {
    for(let i = arr[0]; i <= arr[1]; i++) {
      
      fixedArr.push(i);
    }
  } else {
    for (let i = arr[1]; i <= arr[0]; i++) {
      fixedArr.push(i);
    }
  }
  return fixedArr.reduce(((sum, currentNum) => sum + currentNum), 0);

}

console.log(sumAll([1, 4]))
console.log(sumAll([4, 1]))
sumAll([1, 4]);