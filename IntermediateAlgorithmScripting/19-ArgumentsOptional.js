function addTogether(firstNum, secondNum) {
  let args = [...arguments];
  if (args.length == 2) {
    if (typeof firstNum !== 'number' || typeof secondNum !== 'number') {
      return undefined;
    }
  }
  if (args.length == 1) {
     if (typeof firstNum !== 'number') {
      return undefined;
    }
    return function(y){
      if (typeof y !== 'number') {
      return undefined;
    }
      return y + firstNum;
      }
  }

  console.log(args)

  return firstNum + secondNum;
}

console.log(addTogether(5))
// addTogether(2,3);