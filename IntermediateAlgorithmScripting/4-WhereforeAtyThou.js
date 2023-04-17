function whatIsInAName(collection, source) {
  let props = Object.keys(source);
  let filteredArr = []

  for (let i = 0; i < collection.length; i++) {
    let toBePushed = '';
    let obj = collection[i];
    for (let z = 0; z < props.length; z++) {
      if (obj[props[z]] == source[props[z]]) {
        toBePushed = obj;
      } else {
        toBePushed = '';
        break;
      }
    }

    if (toBePushed != '') filteredArr.push(toBePushed);
  }
  return filteredArr;
}

whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 })