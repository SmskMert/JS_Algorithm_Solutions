function uniteUnique(arr) {
  const args = [...arguments]
  console.log(args);
  let filteredArr = [];
  for (let i = 0; i < args.length; i++) {
    let item = args[i]
    for (let z = 0; z < item.length; z++) {
      if (filteredArr.length > 0) {
          let toBePushed = ''
        for (let y = 0; y < filteredArr.length; y++) {
          if (filteredArr[y] == item[z]) {
           toBePushed = ''
            break;
          } else {
            toBePushed = item[z]
          }
        }
        if(toBePushed != '') filteredArr.push(toBePushed)
      } else filteredArr.push(item[z]);
    }
  }
  return filteredArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);