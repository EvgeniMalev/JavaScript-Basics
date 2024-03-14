function BraceletStand(input) {

  let pocketMoneyPerDay = Number(input[0]);
  let dailyEarnings = Number(input[1]);
  let totalExpenses = Number(input[2]);
  let giftPrice = Number(input[3]);

  let daysLeft = 5;
  let totalEarnings = dailyEarnings * daysLeft;
  let totalSavings = pocketMoneyPerDay * daysLeft;
  let totalMoney = totalEarnings + totalSavings;
  
  if (totalMoney >= giftPrice + totalExpenses) {
    let profit = (totalMoney - totalExpenses).toFixed(2);
    console.log(`Profit: ${profit} BGN, the gift has been purchased.`);
  } else {
    let neededMoney = (giftPrice + totalExpenses - totalMoney).toFixed(2);
    console.log(`Insufficient money: ${neededMoney} BGN.`);
  }
}
