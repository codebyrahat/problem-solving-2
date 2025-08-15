const heights = [167, 190, 120, 165, 137];
function isLowestNumber(heights) {
  let min = heights[0];
  for (const height of heights) {
    if (height < min) {
      min = height;
    }
  }
  return min;
}
console.log("The lowest number is :", isLowestNumber(heights));
