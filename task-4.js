function password(obj) {
  if (!obj.name || !obj.birthYear || !obj.siteName) {
    return "invalid";
  }
  const year = String(obj.birthYear);
  if (year.length < 4 || isNaN(year)) {
    return "invalid";
  }
  const newSiteName =
    obj.siteName.charAt(0).toUpperCase() + obj.siteName.slice(1).toLowerCase();
  const nameThreeLetter = obj.name.slice(0, 3);
  const newPassword = `${newSiteName}#${nameThreeLetter}@${obj.birthYear}`;
  return newPassword;
}
const objData = {
  name: "kolimuddin",
  birthYear: 1999,
  siteName: "google",
};
const print = password(objData);
console.log("Your new Password is : ", print);
