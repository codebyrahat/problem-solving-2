function isCheapestPhone(phones) {
  let cheapestPrice = phones[0];
  for (const phone of phones) {
    if (phone.price < cheapestPrice.price) {
      cheapestPrice = phone;
    }
  }
  return cheapestPrice;
}
const phones = [
  { name: "Iphone", price: 100000, camera: 50 },
  { name: "Nothing", price: 50000, camera: 40 },
  { name: "Samsung", price: 120000, camera: 70 },
  { name: "One Plus", price: 700000, camera: 80 },
];
const cheapest = isCheapestPhone(phones);
console.log(`The Cheapest ${cheapest.name} and Price is ${cheapest.price} Tk`);
