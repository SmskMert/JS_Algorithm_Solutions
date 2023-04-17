function destroyer(arr) {
  let args = [...arguments]
  args = args.splice(1);
  console.log(args)
  let indexesToBeRemoved = []
  for (let i = 0; i < arr.length; i++) {
    args.map(arg => { if (arg === arr[i]) indexesToBeRemoved.push(i); });
  }
  console.log(indexesToBeRemoved)
  let destroyedArr = [];

  for (let i = 0; i < arr.length; i++) {
    let toBePushed = arr[i];
    for (let z = 0; z < indexesToBeRemoved.length; z++) {
      if (indexesToBeRemoved[z] == i) {
        toBePushed = '';
        break;
      }
    }
    if (toBePushed != '') destroyedArr.push(toBePushed);
  }
  console.log(destroyedArr);
  return destroyedArr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);