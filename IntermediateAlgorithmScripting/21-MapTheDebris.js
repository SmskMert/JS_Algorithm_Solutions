function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  const orbitalPeriodArr = []


  arr.forEach(element => {
    const toBeRooted = Math.pow(element.avgAlt + earthRadius, 3) / GM;
    console.log(toBeRooted)
    const t = Math.round(2 * Math.PI * Math.sqrt(toBeRooted))
    console.log(t);

    const orbitalPeriod = {
      name: element.name,
      orbitalPeriod: t
    }
    orbitalPeriodArr.push(orbitalPeriod);
  });


  return orbitalPeriodArr;
}


console.log(orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]))
console.log(orbitalPeriod([{ name: "iss", avgAlt: 413.6 }, { name: "hubble", avgAlt: 556.7 }, { name: "moon", avgAlt: 378632.553 }]))