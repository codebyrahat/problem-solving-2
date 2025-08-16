function calculateMoney(tickets) {
  if (typeof tickets !== "number") {
    return "Enter Integer Value Kindly";
  } else if (tickets < 0) {
    return "Positive Value Kindly";
  }
  const ticketPrice = 120;
  const dailyCost = 500 + (8 * 50); // prettier-ignore
  //  prettier-ignore
  const totalRemainingMoney =(ticketPrice * tickets) - dailyCost; //  prettier-ignore
  return totalRemainingMoney;
}
console.log(calculateMoney(-3));
