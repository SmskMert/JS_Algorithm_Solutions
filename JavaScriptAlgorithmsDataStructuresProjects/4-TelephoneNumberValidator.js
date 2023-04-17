function telephoneCheck(str) {
  if (/\-/.test(str[0])) return false;
  if (/[^0-9() -]/g.test(str)) return false;
  
  if (str.match(/\(/) == null && str.match(/\)/) != null) return false;
  if (str.match(/\)/) == null && str.match(/\(/) != null) return false;
  if (/\)/.test(str[str.length - 1]) || /\(/.test(str[str.length - 1])) return false;
  if(str.match(/-/g) != null){if(str.match(/-/g).length > 2)return false};

  let strArr = str.split('');
  let filteredArr = []
  console.log(filteredArr)
  strArr.forEach(char => {
    if (/[0-9]/.test(char)) filteredArr.push(char);
  });
  if (filteredArr.length < 10) return false;
  if (filteredArr.length > 11) return false;
  if (filteredArr.length == 11 && filteredArr[0]!= 1) return false;
  return true;
}

console.log(telephoneCheck("55 55-55-555-5"))