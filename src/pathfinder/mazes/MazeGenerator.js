import { Stack } from "mnemonist";

/* RANDOMIZED BACKTRACKING ALGORITHM (depth first search) */

export const randomizedMaze = (grid) => {
  const maxRow = grid[0].length;
  const maxCol = grid.length;
  console.log("max row... " + maxRow + " max col... " + maxCol);

  // Find coordinates of start/end node
  for (var i = 0; i < maxRow; i++) {
    for (var j = 0; j < maxCol; j++) {
      if (grid[j][i].locator === "start") {
        var start = grid[j][i];
        console.log("start in A* " + start.row + " " + start.col);
      } else if (grid[j][i].locator === "end") {
        var end = grid[j][i];
        console.log("end in A* " + end.row + " " + end.col);
      }
    }
  }

  start.isVisited = true;
  end.isVisited = true;

  var mappedMaze = []; // final maze mapped in order of wall generation
  var stack = new Stack();

  // fill the edges of the maze:
  //[mappedMaze, grid] = fillEdges(grid, maxCol, maxRow, mappedMaze);

  // fill the rest of the maze:
  /* pick random start node of algo */
  var check = false;
  while (!check) {
    var randRow = getRandomNum(0, maxRow - 1);
    var randCol = getRandomNum(0, maxCol - 1);
    console.log("rand row: " + randRow + " , rand col: " + randCol);
    check = checkLocator(grid, randRow, randCol);
    if (randRow % 2 === 0) check = false;
  }

  // save starting node
  var start = grid[randCol][randRow];
  console.log("random start r/c: " + start.row + " " + start.col);
  start.isVisited = true;
  start.locator = "wall";
  stack.push(start);
  mappedMaze.push(start);

  // START NODE ---> TARGET NODE || Top -> Right -> Bottom -> Left
  const dr = [-2, 0, 2, 0];
  const dc = [0, 2, 0, -2];

  while (stack.size > 0) {
    var current = stack.pop();
    var availableNeighbours = [];
    console.log("current r/c: " + current.row + " " + current.col);

    // Check all 4 neighbours around the node
    for (var i = 0; i < 4; i++) {
      const row = current.row + dr[i];
      const col = current.col + dc[i];

      if (!isValidOnBoard(row, col, maxRow, maxCol)) continue;

      var neighbour = grid[col][row];
      if (!neighbour.isVisited && neighbour.locator === "") {
        stack.push(current);
        availableNeighbours.push(neighbour);
      }
    }

    if (availableNeighbours.length === 0) {
      continue;
    }

    // choose neighbour of the current node
    var randomNum = getRandomNum(0, availableNeighbours.length - 1);
    var nextNode = availableNeighbours[randomNum];
    nextNode.isVisited = true;
    nextNode.locator = "wall";
    stack.push(nextNode);
    mappedMaze.push(nextNode);
    console.log("neighbour r/c: " + nextNode.row + " " + nextNode.col);

    // connect neighbour and the current node
    var joiningNode = null;
    // bottom
    if (nextNode.col > current.col && nextNode.row === current.row) {
      joiningNode = grid[current.col + 1][current.row];
      console.log("bottom... nextNode.col > current.col");
    }
    // top
    else if (nextNode.col < current.col && nextNode.row === current.row) {
      joiningNode = grid[current.col - 1][current.row];
      console.log("top... nextNode.col < current.col");
    }
    // left
    else if (nextNode.row < current.row && nextNode.col === current.col) {
      joiningNode = grid[current.col][current.row - 1];
      console.log("left... nextNode.row < current.row");
    }
    // right
    else if (nextNode.row > current.row && nextNode.col === current.col) {
      joiningNode = grid[current.col][current.row + 1];
      console.log("right... nextNode.row > current.row");
    }
    console.log("joining node: " + joiningNode.row + " " + joiningNode.col);

    if (joiningNode.locator === "start" || joiningNode.locator === "end")
      continue;

    joiningNode.isVisited = true;
    joiningNode.locator = "wall";
    mappedMaze.push(joiningNode);
  }

  return [mappedMaze, grid];
};

// Validate if next neighbour is being checked on board and not outside
function isValidOnBoard(row, col, maxRow, maxCol) {
  return row < maxRow && row >= 0 && col < maxCol && col >= 0 ? true : false;
}

function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function checkLocator(grid, col, row) {
  return grid[row][col].locator === "start" || grid[row][col].locator === "end"
    ? false
    : true;
}

function fillEdges(grid, maxRow, maxCol, mappedMaze) {
  // TOP
  for (var i = 0; i < maxCol; i++) {
    if (!checkLocator(grid, i, 0)) continue;
    mappedMaze.push(grid[i][0]);
    grid[i][0].locator = "wall";
  }
  // RIGHT
  for (i = 1; i < maxRow; i++) {
    if (!checkLocator(grid, maxCol - 1, i)) continue;
    mappedMaze.push(grid[maxCol - 1][i]);
    grid[maxCol - 1][i].locator = "wall";
  }
  // BOTTOM
  for (i = maxCol - 2; i >= 0; i--) {
    if (!checkLocator(grid, i, maxRow - 1)) continue;
    mappedMaze.push(grid[i][maxRow - 1]);
    grid[i][maxRow - 1].locator = "wall";
  }
  // LEFT
  for (i = maxRow - 2; i > 0; i--) {
    if (!checkLocator(grid, 0, i)) continue;
    mappedMaze.push(grid[0][i]);
    grid[0][i].locator = "wall";
  }
  return [mappedMaze, grid];
}
