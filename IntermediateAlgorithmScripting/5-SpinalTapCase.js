function spinalCase(str) {
  let adjustedStr = '';
  for (let i = 0; i < str.length; i++) {
    adjustedStr += str[i]
    if (/[a-z]/.test(str[i]) && /[A-Z]/.test(str[i + 1])) {
      adjustedStr+= ' ';
    }
  }
  
  adjustedStr = adjustedStr.toLowerCase().split(/[_ ]/).join('-');
  return adjustedStr;
}

spinalCase('This Is Spinal Tap');
spinalCase("thisIsSpinalTap");