function findAveragePhonePrice(phonesList) {
  let sum = 0;
  let count = 0;
  for (const phone of phonesList) {
    sum = sum + phone.price;
    count++;
  }
  const avgPhonePrice = sum / count;
  return avgPhonePrice;
}
const phonesList = [
  { model: "PhoneA", brand: "Iphone", price: 95000 },
  { model: "PhoneB", brand: "Samsung", price: 40000 },
  { model: "PhoneC", brand: "Oppo", price: 26000 },
  { model: "PhoneD", brand: "Nokia", price: 35000 },
  { model: "PhoneE", brand: "Iphone", price: 105000 },
  { model: "PhoneF", brand: "HTC", price: 48000 },
];
const avgPrice = findAveragePhonePrice(phonesList);
console.log("The average price is: ", Math.round(avgPrice), " TK only");
