import { createNode } from "./Node.js";

export const setGrid = (
  maxRow,
  maxCol,
  start_row,
  start_col,
  end_row,
  end_col
) => {
  const grid = [];

  const initializeGrid = () => {
    var count = 0;
    for (var i = 0; i < maxRow; i++) {
      var nodeRows = [];
      for (var j = 0; j < maxCol; j++) {
        var locator = setLocators(j, i, start_row, start_col, end_row, end_col);
        const node = createNode(i, j, locator, count);
        nodeRows.push(node);
        count++;
      }
      grid.push(nodeRows);
    }
    return grid;
  };

  // Place locators on the grid
  const setLocators = (j, i, start_row, start_col, end_row, end_col) => {
    var locatorProp = "";

    if (j === start_row && i === start_col) {
      locatorProp = "start";
      //console.log("loc start GR: r/c: " + start_row + " " + start_col);
    }
    if (j === end_row && i === end_col) locatorProp = "end";
    //console.log("loc end GR: r/c: " + end_row + " " + end_col);
    return locatorProp;
  };

  return initializeGrid();
};
