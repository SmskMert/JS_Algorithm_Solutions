function convertHTML(str) {
  str = str.replace('&','&amp;');
  str = str.replace(/</g,'&lt;');
  str = str.replace('>','&gt;');
  str = str.replace(/"/g,'&quot;');
  str = str.replace("'",'&apos;');
  return str;
}
console.log(convertHTML('Stuff in "quotation marks"'))
convertHTML("Dolce & Gabbana");