export const stairs = (grid) => {
  const maxRow = grid[0].length;
  const maxCol = grid.length;

  var mappedAr = [];
  var ctn = 0;
  var i = 0;
  var j = 0;

  for (i = 0; i < maxRow; i++) {
    ctn++;
    if (checkLocator(grid, i, i)) continue;
    mappedAr.push(grid[i][i]);
    grid[i][i].locator = "wall";
  }
  for (i = maxRow - 2, j = ctn; i > 0; i--, j++) {
    ctn++;
    if (checkLocator(grid, j, i)) continue;
    mappedAr.push(grid[j][i]);
    grid[j][i].locator = "wall";
  }

  for (i = 2, j = ctn; j < maxCol - 1; i++, j++) {
    if (checkLocator(grid, j, i)) continue;
    mappedAr.push(grid[j][i]);
    grid[j][i].locator = "wall";
  }

  return [mappedAr, grid];
};

function checkLocator(grid, j, i) {
  return grid[j][i].locator === "start" ||
    grid[j][i].locator === "end" ||
    grid[j][i].locator === "wall" ||
    grid[j][i].locator === "weight"
    ? true
    : false;
}
