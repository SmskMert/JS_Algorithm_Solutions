function binaryAgent(str) {
  const binaries = str.split(' ');
  let chars = binaries.map(binary => String.fromCharCode(parseInt(binary, 2)));
  str = chars.reduce((sentence, char)=> sentence+=char, '');
  return str;
}