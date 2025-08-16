function deleteInvalids(mixedArray) {
  if (!Array.isArray(mixedArray)) {
    return " Please Give array input";
  }
  let onlyNumberArray = [];
  for (let i = 0; i < mixedArray.length; i++) {
    if (typeof mixedArray[i] === "number" && !isNaN(mixedArray[i])) {
      onlyNumberArray.push(mixedArray[i]);
    }
  }
  return onlyNumberArray;
}
const mixedArray = [
  { ob: "lala" },
  null,
  "kala",
  NaN,
  1,
  12,
  0,
  -1,
  undefined,
  "12",
];
console.log(deleteInvalids(mixedArray));
