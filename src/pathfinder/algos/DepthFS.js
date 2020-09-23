// DEPTH FIRST SEARCH ALGORITHM
/* Used to find components (connected nodes) in a graph, NOT for shortest path - needs findComponent() */

export const depthFS = (grid) => {
  // Calculate total number of nodes
  const maxRow = grid[0].length; // 13?
  const maxCol = grid.length; // 75?
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

  // Create an adjacency list for the full grid
  const adjacencyDFS = (grid, maxRow, maxCol) => {
    // Make an obj for adjacent nodes on the grid (from "start")
    var AL = {};
    // START NODE ---> TARGET NODE || Top -> Right -> Bottom -> Left
    const dr = [-1, 0, 1, 0];
    const dc = [0, 1, 0, -1];

    for (var i = 0; i < maxRow; i++) {
      for (var j = 0; j < maxCol; j++) {
        // Prepare an object to add into AL
        var obj = { orig: null, adj: [] };
        var node = grid[j][i];
        obj.orig = node;

        // Check all 4 neighbours around the node
        for (var k = 0; k < 4; k++) {
          const row = node.row + dr[k];
          const col = node.col + dc[k];

          if (isValidOnBoard(row, col, maxRow, maxCol)) {
            var neighbour = grid[col][row];
            if (neighbour.locator === "" || neighbour.locator === "end") {
              obj.adj.push(neighbour);
            }
          }
        }
        AL[node.row + "-" + node.col] = obj;
      }
    }
    return AL;
  };

  const solveDFS = (node, adjList) => {
    // Recurse through nodes in one direction (depth) -> my starting direction is >TOP<, but can be anything
    // If not possible (no available nodes || node isVisited already), backtrack to the last node with next available node and keep going until you find end

    if (node.isVisited || mapSearch.foundEnd) {
      return;
    }
    if (node.locator === "end") {
      mapSearch.foundEnd = true;
      node.isVisited = true;
      mapSearch.mapped.push(node);
      //finalPath.push(node);
      return;
    }
    node.isVisited = true;
    mapSearch.mapped.push(node);
    //finalPath.push(node);

    const neighbourList = adjList[node.row + "-" + node.col].adj;
    for (var i = 0; i < neighbourList.length; i++) {
      solveDFS(neighbourList[i], adjList);
      neighbourList[i].previousNode = node;
    }
  };

  const reconstructPath = (mappedFunction, start, end) => {
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

  // Keep track of the order of nodes that get visited (global var)
  var mapSearch = { mapped: [], foundEnd: false };
  var finalPath = [];

  const adjList = adjacencyDFS(grid, maxRow, maxCol);
  solveDFS(start, adjList);
  finalPath = reconstructPath(mapSearch, start, end);

  return { mappedFunction: mapSearch.mapped, finalPath: finalPath };
};

// Validate if next neighbour is being check on board and not outside
function isValidOnBoard(row, col, maxRow, maxCol) {
  return row < maxRow && row >= 0 && col < maxCol && col >= 0 ? true : false;
}
