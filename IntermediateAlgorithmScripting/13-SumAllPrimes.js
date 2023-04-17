function sumPrimes(num) {
  if (num == 0) return 1;
  const primes = []
  let toBePushed = '';
  for (let i = 2; i <= num;i++) {
    toBePushed = i;
    for(let y=2; y<i; y++)
    if (i % y == 0) {
      toBePushed = '';
      break
    }
   if(toBePushed != '') primes.push(toBePushed);
  }
  console.log(primes);
  return primes.reduce((totalSum,number) => totalSum +=number,0);
}

sumPrimes(10);