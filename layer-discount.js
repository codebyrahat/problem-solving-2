function layerDiscountedPrice(amount) {
  const first100Price = 100;
  const second100Price = 90;
  const over200Price = 50;

  if (amount <= 100) {
    return amount * first100Price;
  } else if (amount <= 200) {
    const firstPart = first100Price * 100;
    const remaining = amount - 100;
    const secondPart = remaining * second100Price;
    return firstPart + secondPart;
  } else {
    const firstPart = first100Price * 100;
    const secondPart = second100Price * 100;
    const remaining = amount - 200;
    const over200Part = remaining * over200Price;
    return firstPart + secondPart + over200Part;
  }
}
const amount = 300;
const priceAfterDiscount = layerDiscountedPrice(amount);
console.log(priceAfterDiscount);
