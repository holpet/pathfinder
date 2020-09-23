import { Queue } from "mnemonist";

// BREADTH FIRST SEARCH ALGORITHM
/* Finds shortest path in a graph, non-weighted. */

export const breadthFS = (grid) => {
  // Calculate total number of nodes
  const maxRow = grid[0].length;
  const maxCol = grid.length;
  var start = null;
  var end = null;

  // Find coordinates of start/end node
  for (var i = 0; i < maxRow; i++) {
    for (var j = 0; j < maxCol; j++) {
      if (grid[j][i].locator === "start") {
        start = grid[j][i];
        console.log("start in BFS " + start.row + " " + start.col);
      } else if (grid[j][i].locator === "end") {
        end = grid[j][i];
        console.log("end in BFS " + end.row + " " + end.col);
      }
    }
  }

  // SOLVE BFS
  const solveBFS = (grid, start) => {
    // Make a queue for adding adjacent nodes on the grid (from "start")
    var Q = new Queue();
    Q.enqueue(start);
    // Set previous node to itself and isVisited
    start.previousNode = start;
    start.isVisited = true;
    // Keep track of the order of nodes that get visited
    var mapped = [];
    mapped.push(start);

    // START NODE ---> TARGET NODE || Top -> Right -> Bottom -> Left
    const dr = [-1, 0, 1, 0];
    const dc = [0, 1, 0, -1];

    while (Q.size > 0) {
      // Get first elements from the queue
      var node = Q.dequeue();

      // Check all 4 neighbours around the node
      for (var i = 0; i < 4; i++) {
        const row = node.row + dr[i];
        const col = node.col + dc[i];

        if (isValidOnBoard(row, col, maxRow, maxCol)) {
          var neighbour = grid[col][row];
          if (
            !neighbour.isVisited &&
            (neighbour.locator === "" || neighbour.locator === "end")
          ) {
            Q.enqueue(neighbour);
            neighbour.isVisited = true;
            neighbour.previousNode = node;
            mapped.push(neighbour);
          }

          // Finish search when the end node is found and return the mapped area
          if (neighbour.locator === "end") {
            console.log(
              "THE END FOUND. " + neighbour.row + " " + neighbour.col
            );
            return { mappedSearch: mapped, foundEnd: true };
          }
        }
      }
    }
    /* ------------- END OF WHILE LOOP ------------- */
    console.log("THE END WASN'T FOUND. No path available.");
    return { mappedSearch: mapped, foundEnd: false };
  };

  const reconstructPath = (mappedFunction, start, end) => {
    const mapped = mappedFunction.mappedSearch;
    const foundEnd = mappedFunction.foundEnd;
    var pathMapped = [];

    if (!foundEnd) {
      pathMapped.push(start);
      pathMapped.push(end);
      return pathMapped;
    }

    // Traverse through the mapped array backwards to reconstruct path from end to start
    var node = mapped[mapped.length - 1];
    pathMapped.push(node);
    while (node.locator !== "start") {
      node = node.previousNode;
      pathMapped.push(node);
    }
    console.log("Final path length: " + pathMapped.length);
    pathMapped.reverse();
    return pathMapped;
  };

  const mappedFunction = solveBFS(grid, start);
  const finalPath = reconstructPath(mappedFunction, start, end);

  return { mappedFunction: mappedFunction.mappedSearch, finalPath: finalPath };
};

// Validate if next neighbour is being check on board and not outside
function isValidOnBoard(row, col, maxRow, maxCol) {
  return row < maxRow && row >= 0 && col < maxCol && col >= 0 ? true : false;
}
