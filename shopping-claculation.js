function shoppingBill(shirtQuantity, pantQuantity, shoeQuantity) {
  const shirtPrice = 500;
  const pantPrice = 300;
  const shoePrice = 900;
  const totalBill =
    shirtPrice * shirtQuantity +
    pantPrice * pantQuantity +
    shoePrice * shoeQuantity;
  return totalBill;
}
const orderQuantity = shoppingBill(1, 2, 1);
console.log(orderQuantity);
