function pairElement(str) {
  let arr = str.split('');
 
  let dnaArr = [];
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case 'A':
        dnaArr.push(['A', 'T']);
        break;
      case 'T':
        dnaArr.push(['T', 'A']);
        break;
      case 'G':
        dnaArr.push(['G', 'C']);
        break;
      case 'C':
        dnaArr.push(['C', 'G']);
        break;
    }
  }
  console.log(dnaArr);
  return dnaArr;
}

pairElement("ATCGA");