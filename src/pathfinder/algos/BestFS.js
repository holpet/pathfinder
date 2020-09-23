import { Heap } from "mnemonist";

// BEST FS ALGORITHM
/* Finds shortest path in a graph, non-weighted. 
--- takes into account only heuristic values (distance from node to end) */

export const bestFS = (grid) => {
  const maxRow = grid[0].length;
  const maxCol = grid.length;
  var start = null;
  var end = null;

  // Find coordinates of start/end node
  for (var i = 0; i < maxRow; i++) {
    for (var j = 0; j < maxCol; j++) {
      if (grid[j][i].locator === "start") {
        start = grid[j][i];
      } else if (grid[j][i].locator === "end") {
        end = grid[j][i];
      }
    }
  }

  // SOLVE BEST FS
  const solveBestFS = (grid, start) => {
    // Make a priority queue for adjacent nodes on the grid (from "start")
    // max priority = node with shortest distance (including heuristic)
    var PQ = new Heap(function (obj1, obj2) {
      if (obj1.distance < obj2.distance) return -1;
      if (obj1.distance >= obj2.distance) return 1;
      return 0;
    });
    // Set previous node to itself, isVisited and distance to 0
    start.previousNode = start;
    start.isVisited = true;
    start.distance = 0;
    PQ.push({ distance: start.distance, node: start });
    // Keep track of the order of nodes that get visited
    var mapped = [];
    mapped.push(start);
    var foundE = false;

    // START NODE ---> TARGET NODE || Top -> Right -> Bottom -> Left
    const dr = [-1, 0, 1, 0];
    const dc = [0, 1, 0, -1];

    while (PQ.size > 0) {
      // Get the top element from the heap
      var node = PQ.pop().node;
      mapped.push(node);

      // Check all 4 neighbours around the node
      for (var i = 0; i < 4; i++) {
        const row = node.row + dr[i];
        const col = node.col + dc[i];

        if (isValidOnBoard(row, col, maxRow, maxCol)) {
          var neighbour = grid[col][row];
          if (neighbour.locator !== "wall" && !neighbour.isVisited) {
            // Add distance
            neighbour.distance = heuristic(neighbour, end);

            // Set neighbour algo props
            neighbour.isVisited = true;
            neighbour.previousNode = node;
            PQ.push({ distance: neighbour.distance, node: neighbour });
            //mapped.push(neighbour);
          }

          // Finish search when the end node is found and return the mapped area

          if (neighbour.locator === "end") {
            //mapped.push(neighbour);
            foundE = true;
            return { mappedSearch: mapped, foundEnd: foundE };
          }
        }
      }
    }
    /* ------------- END OF WHILE LOOP ------------- */

    return { mappedSearch: mapped, foundEnd: foundE };
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
    var node = end;
    pathMapped.push(node);
    while (node.locator !== "start") {
      node = node.previousNode;
      pathMapped.push(node);
    }
    pathMapped.reverse();
    return pathMapped;
  };

  const mappedFunction = solveBestFS(grid, start);
  const finalPath = reconstructPath(mappedFunction, start, end);

  return { mappedFunction: mappedFunction.mappedSearch, finalPath: finalPath };
};

// Validate if next neighbour is being check on board and not outside
function isValidOnBoard(row, col, maxRow, maxCol) {
  return row < maxRow && row >= 0 && col < maxCol && col >= 0 ? true : false;
}

// Heuristic calculation
function heuristic(node, end) {
  /* Manhattam distance - better for grid implementation (blocks) */
  /* Implements a tie-breaker that makes A* prefer exploring nodes closer to the end */
  /* --- (1.0 + min_step_to_next_node / max_length_of_expected_path) --- */
  return (
    (Math.abs(node.row - end.row) + Math.abs(node.col - end.col)) *
    (1.0 + 1 / 1200)
  );
}
