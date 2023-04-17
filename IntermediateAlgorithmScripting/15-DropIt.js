function dropElements(arr, func) {
  let revisedArr = [];
  let keepPush = false;
  for(let i=0; i<arr.length; i++){
    console.log(func(arr[i]))
    if(func(arr[i]))keepPush=true;
    if(keepPush)revisedArr.push(arr[i]);
  }
  if(revisedArr == [])return arr;
  return revisedArr;
}

dropElements([1, 2, 3], function(n) {return n < 3; });