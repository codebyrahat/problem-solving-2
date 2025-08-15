const names = [];
function smallestName(names) {
  if (!Array.isArray(names) || names.length === 0) {
    return "Please insert String Array";
  }
  let smallName = names[0];
  for (const name of names) {
    if (name.length < smallName.length) {
      smallName = name;
    }
  }
  return smallName;
}
console.log(smallestName(names));
