function sumFibs(num) {
  if (num == 1) return 1;
  let fibonaccis = [0, 1];
  let counter = 0;
  do {
    fibonaccis.push(fibonaccis[counter] + fibonaccis[counter + 1])
    counter++;
  } while (fibonaccis[fibonaccis.length - 1] <= num)
  fibonaccis.pop();
  let filtered = fibonaccis.filter(num => num % 2 != 0);
  let totalSum = filtered.reduce((sum, number) => sum += number, 0);
  return totalSum;
}
sumFibs(1000);