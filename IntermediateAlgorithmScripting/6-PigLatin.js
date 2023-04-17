function translatePigLatin(str) {
  if(/[aeiou]/.test(str[0])){
return str + 'way';
  }
  else{
    let consonantsArr = str.match(/^[^aeiou]*/);
    console.log(consonantsArr[0]);
    let revisedStr = '';
  for(let i = consonantsArr[0].length; i<str.length;i++){
revisedStr += str[i];
  }
return revisedStr + consonantsArr[0] + 'ay';
  }
}
console.log(translatePigLatin("glove"));