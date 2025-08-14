// Finding lowest Number from an array
function isLowestNumber(arr) {
  let min = numbers[0];
  for (const number of numbers) {
    if (number < min) {
      min = number;
    }
  }
  return min;
}
const numbers = [11, 12, 13, 15, 44, 33, 6, 7];
const minNumber = isLowestNumber(numbers);
console.log(minNumber);
