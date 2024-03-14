function calculateSantaCost(input) {
  let paperRollPrice = 5.80;
  let fabricRollPrice = 7.20;
  let gluePrice = 1.20;

  let rollsOfPaper = Number(input[0]);
  let rollsOfFabric = Number(input[1]);
  let litersOfGlue = Number(input[2]);
  let discount = Number(input[3]) / 100;

  let paperCost = rollsOfPaper * paperRollPrice;
  let fabricCost = rollsOfFabric * fabricRollPrice;
  let glueCost = litersOfGlue * gluePrice;

  let totalCost = paperCost + fabricCost + glueCost;
  let discountedCost = totalCost - (totalCost * discount);

  console.log(discountedCost.toFixed(3));
}
