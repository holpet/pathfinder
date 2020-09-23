export const createNode = (col, row, locator, nodeID) => {
  return {
    row,
    col,
    locator,
    nodeID,

    // Vars for algorithms
    distance: Infinity,
    totalDistance: Infinity,
    isVisited: false,
    previousNode: null,
  };
};
