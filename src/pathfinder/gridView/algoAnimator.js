export const animateSearch = (mappedSearch) => {
  // mappedSearch: array of all visited nodes in order
  // animate without start & end nodes
  clearClasses();
  for (let i = 1; i < mappedSearch.length; i++) {
    if (mappedSearch[i].locator === "end") {
      return;
    }
    setTimeout(() => {
      const node = mappedSearch[i];
      document.getElementById(`node-${node.row}-${node.col}`).className =
        "node algo";
    }, 20 * i);
  }
};

export const animatePath = (finalPath, mappedSearch) => {
  // finalPath: array of nodes from start to target node representing the shortest path
  // mappedSearch: to determine num of elements that are being animated
  // animate without start & end nodes
  const mappedLength = mappedSearch.length;
  for (let i = 0; i < finalPath.length; i++) {
    setTimeout(() => {
      const node = finalPath[i];
      if (node.locator === "weight") {
        document.getElementById(`img-${node.row}-${node.col}`).className =
          "hand-path";
      }
      document.getElementById(`node-${node.row}-${node.col}`).className =
        "node path";
    }, 20 * (i + mappedLength + 40));
  }
};

export const recalcAlgo = (finalPath, mappedSearch) => {
  // final state without animation
  clearClasses();
  for (let i = 1; i < mappedSearch.length - 1; i++) {
    const node = mappedSearch[i];
    document.getElementById(`node-${node.row}-${node.col}`).className =
      "node algo";
  }
  for (let i = 0; i < finalPath.length; i++) {
    const node = finalPath[i];
    if (node.locator === "weight") {
      document.getElementById(`img-${node.row}-${node.col}`).className =
        "hand-path";
    }
    document.getElementById(`node-${node.row}-${node.col}`).className =
      "node path";
  }
};

export const animateGenerated = (mappedWalls) => {
  notActive([], mappedWalls);
  for (let i = 0; i < mappedWalls.length; i++) {
    setTimeout(() => {
      const node = mappedWalls[i];
      document
        .getElementById(`node-${node.row}-${node.col}`)
        .classList.add("wall-gener");
    }, 20 * i);
  }
};

export const deanimateGeneratedAfter = () => {
  const animWallList = document.getElementsByClassName(`wall-gener`);
  for (let i = 0; i < animWallList.length; i++) {
    animWallList[i].classList.remove("wall-gener");
  }
};

export const isWeightOnGrid = (grid, maxRow, maxCol) => {
  for (var i = 0; i < maxRow; i++) {
    for (var j = 0; j < maxCol; j++) {
      if (grid[j][i].locator === "weight") {
        return true;
      }
    }
  }
  return false;
};

function clearClasses() {
  var handEl = document.getElementsByClassName(`hand-path`);
  for (var i = 0; i < handEl.length; i++) {
    handEl[i].className = "hand";
  }
}

export const notActive = (finalPath, mappedSearch) => {
  // finalPath: to determine num of elements that are being animated
  // mappedSearch: to determine num of elements that are being animated
  const mappedLength = mappedSearch.length;
  const finalPathLength = finalPath.length;
  document.getElementById(`header-link-start`).className = "not-active";
  document.getElementById(`header-link-stairs`).className = "not-active";
  document.getElementById(`header-link-maze`).className = "not-active";
  document.getElementById(`header-link-clear`).className = "not-active";
  var grid = document.getElementsByClassName(`grid`);
  grid[0].classList.add("not-active");
  setTimeout(() => {
    document.getElementById(`header-link-start`).className = "";
    document.getElementById(`header-link-stairs`).className = "";
    document.getElementById(`header-link-maze`).className = "";
    document.getElementById(`header-link-clear`).className = "";
    grid[0].classList.remove("not-active");
  }, 20 * (mappedLength + finalPathLength + 40));
};
