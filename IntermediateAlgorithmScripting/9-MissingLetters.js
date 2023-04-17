function fearNotLetter(str) {
  const regex = new RegExp(str[0]);
  const allLetters = "abcdefghijklmnopqrstuvwxyz";
  const match = allLetters.match(regex)
  console.log(match.index);

  let counter = match.index;
  for (let i = 0; i < str.length; i++) {
    if (str[i] != allLetters[counter]) {

      return allLetters[counter]
    }
    counter++;
  }
  return undefined;
}
console.log(fearNotLetter("abce"))
fearNotLetter("abce");