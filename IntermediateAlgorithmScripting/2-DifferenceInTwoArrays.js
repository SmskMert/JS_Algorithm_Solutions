function diffArray(arr1, arr2) {
  if(arr1.length == 0) return arr2;
  let firstArray = diffFirstArray(arr1, arr2);
  let secondArray = diffFirstArray(arr2, arr1);
  let final = [...firstArray,...secondArray];
  return final;
}

function diffFirstArray(arr1, arr2) {
  let checkedArr = []
  let toBeControlledFirst = '';
  for (let i = 0; i < arr1.length; i++) {
    for (let z = 0; z < arr2.length; z++) {
      if (arr1[i] !== arr2[z]) {
        toBeControlledFirst = arr1[i];
      } else {
        toBeControlledFirst = '';
        break;
      }
    }
    if (toBeControlledFirst !== '') {
      checkedArr.push(toBeControlledFirst);
      toBeControlledFirst = '';
    }
  }
  return checkedArr;
}