function myReplace(str, before, after) {
  const regex = new RegExp(before);
  after = after.toLowerCase();
  const match = str.match(regex);
  if (/^[A-Z]/.test(match[0])) {
    console.log(match[0]);
    after = after[0].toUpperCase() + after.slice(1);
    console.log(after);
  }
  let revisedStr = '';
  for (let i = 0; i < str.length; i++) {
    if (i == match.index) {
      revisedStr += after;
    } else if ((i <= match.index || i >= (match.index + before.length)))
      revisedStr += str[i];
  }
  return revisedStr;
}

myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped");