function checkName(str) {
  if (typeof str !== "string") {
    return "Invalid";
  }
  const letters = ["A", "y", "i", "e", "o", "u", "w"];
  const strArray = str.split("");
  const lastIndex = strArray[strArray.length - 1];
  for (let i = 0; i < letters.length; i++) {
    if (lastIndex.toLowerCase() === letters[i].toLowerCase()) {
      return "Good Name";
    }
  }
  return "Bad Name";
}
console.log(checkName("199"));
