function checkCashRegister(price, cash, cid) {
  let unitAmount = [['ONE HUNDRED', 100],
  ['TWENTY', 20], ['TEN', 10], ['FIVE', 5], ['ONE', 1], ['QUARTER', 0.25], ['DIME', 0.1], ['NICKEL', 0.05], ['PENNY', 0.01]];

  let unitAmountObj = { 'ONE HUNDRED': 100, 'QUARTER': 0.25, 'TWENTY': 20, 'TEN': 10, 'DIME': 0.1, 'NICKEL': 0.05, 'FIVE': 5, 'ONE': 1, 'PENNY': 0.01 }

  let reversedCid = [];
  for (let i = cid.length - 1; i >= 0; i--) {
    reversedCid.push(cid[i]);
  };
  let changeNum = cash - price;
  console.log(changeNum);
  let totalCid = cid. reduce((totalCid, unit) => {
    return totalCid = parseFloat(totalCid) + parseFloat(unit[1]);
    }, 0.00);
    if(totalCid<changeNum)return returnObj('INSUFFICIENT_FUNDS',[]);
    if(totalCid==changeNum)return returnObj('CLOSED',cid);

  let changeQuantity = [];
  for (let i = 0; i < unitAmount.length; i++) {
    let amount = unitAmount[i][1];
    let unit = unitAmount[i][0];
    let calculation = Math.floor(changeNum / amount);
    if (calculation > 0) {
      if(unit =='PENNY'){changeQuantity.push([unit, calculation +1]);continue;}
      changeQuantity.push([unit, calculation]);
      changeNum = changeNum - (calculation*amount);
    }
  }
  console.log('changeQuantity', changeQuantity);

  let changeAmount = []
  for (let i = 0; i < changeQuantity.length; i++) {
    changeAmount.push([changeQuantity[i][0], changeQuantity[i][1] * unitAmountObj[changeQuantity[i][0]]])
  }
  console.log('changeAmount',changeAmount);
  console.log('reversedCid', reversedCid)

  for(let i = 0; i< changeAmount.length; i++){
    for(let z=0; z< reversedCid.length; z++){
      if(changeAmount[i][0] === reversedCid[z][0] && changeAmount[i][1]>reversedCid[z][1]){
        let difference = changeAmount[i][1] - reversedCid[z][1];
        let smallerCid = 0;
        for(let y=z; y< reversedCid.length; y++){
          smallerCid += reversedCid[y][1];
        }
        if(difference>smallerCid) return returnObj('INSUFFICIENT_FUNDS',[]);
        else{};

        console.log(z,changeAmount[i][0],changeAmount[i][1])
      }
    }

  }
   return returnObj("OPEN", changeAmount);
}

function returnObj(status, change) {
  let obj = {
    status: status,
    change: change
  }
  return obj;
}
console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))