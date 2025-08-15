function calculateElectronicsBudget(
  laptopQuantity,
  tabletQuantity,
  mobilQuantity
) {
  const laptopPrice = 35000;
  const tabletPrice = 15000;
  const mobilePrice = 20000;
  const totalLapPrice = laptopQuantity * laptopPrice;
  const totalTabPrice = tabletQuantity * tabletPrice;
  const totalMobPrice = mobilQuantity * mobilePrice;
  const totalBill = totalLapPrice + totalTabPrice + totalMobPrice;
  return totalBill;
}
console.log(calculateElectronicsBudget(1, 1, 3));
