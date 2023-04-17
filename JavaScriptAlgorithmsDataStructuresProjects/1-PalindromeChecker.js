function palindrome(str) {
  str=str.toLowerCase().replace(/[^a-z1-9]/g, '');
  let strArr=str.split('');
  let reversedStr=''
  for(let i=strArr.length-1;i>=0;i--){
    reversedStr+= strArr[i];
  }
  console.log(str)
  console.log(reversedStr)
 return str === reversedStr ? true:false;
}
console.log(palindrome("1 eye for of 1 eye."))