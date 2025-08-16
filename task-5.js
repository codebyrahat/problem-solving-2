function monthlySavings(totalIncomes, livingCost) {
  if (!Array.isArray(totalIncomes) || typeof livingCost !== "number") {
    return "invalid Input";
  }
  let totalTax = 0;
  let totalEarning = 0;
  for (const income of totalIncomes) {
    if (income >= 3000) {
      // prettier-ignore
      const tax =(income * (20/100));
      totalTax += tax;
    }
  }
  for (const income of totalIncomes) {
    totalEarning += income;
  }
  const savings = totalEarning - totalTax - livingCost;
  if (savings < 0) {
    return "Earn More";
  }
  return savings;
}
const totalIncomes = [900, 2700, 3400];
const livingCost = 10000;
const savingsMonthly = monthlySavings(totalIncomes, livingCost);
console.log(savingsMonthly);
