```jsx
function convertToRoman(num) {
  const dividers = [1000, 500, 100, 50, 10, 5, 1]
  let roman = []

  for (let i = 0; i < dividers.length; i++) {
    while ((num / dividers[i]) >= 1) {
      roman.push(Math.floor(num / dividers[i]));
      num = num % dividers[i];
      break;
    }
    if (roman.length - 1 != i) roman.push('0');
  }
  console.log(roman);

  let dictionary = [[0, 'M'], [1, 'D'], [2, 'C'], [3, 'L'], [4, 'X'], [5, 'V'], [6, 'I']];
  let romanStr = '';

  for (let i = 0; i < roman.length; i++) {
    if (i > 0 && roman[i] == 4 && roman[i - 1] == 0) {
      if (i == 6) romanStr += 'IV';
      if (i == 4) romanStr += 'XL';
      if (i == 2) romanStr += 'CD';
      continue;
    }

    if (i > 0 && roman[i] == 4 && roman[i - 1] > 0) {
      romanStr = romanStr.split('');
      romanStr.pop();
      romanStr = romanStr.join('');
      if (i == 6) romanStr += 'IX';
      if (i == 4) romanStr += 'XC';
      if (i == 2) romanStr += 'CM';

      continue;
    }

    for (let z = roman[i]; z > 0; z--) {
      romanStr += dictionary[i][1];
    }

}
return romanStr;
}

convertToRoman(29);
```