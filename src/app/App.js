import React, { PureComponent, createRef } from "react";
import Header, { isWeightAvailable } from "./header/Header.js";
import "./App.css";
import GridView from "../pathfinder/gridView/GridView.jsx";
import { setGrid } from "../pathfinder/grid/Grid.js";
import { stairs } from "../pathfinder/mazes/StairGenerator.js";
import { randomizedMaze } from "../pathfinder/mazes/MazeGenerator.js";
import { breadthFS } from "../pathfinder/algos/BreadthFS.js";
import { dijkstra } from "../pathfinder/algos/Dijkstra.js";
import { depthFS } from "../pathfinder/algos/DepthFS.js";
import { Astar } from "../pathfinder/algos/Astar.js";
import { bestFS } from "../pathfinder/algos/BestFS.js";
import {
  animateSearch,
  animatePath,
  animateGenerated,
  deanimateGeneratedAfter,
  notActive,
  recalcAlgo,
  isWeightOnGrid,
} from "../pathfinder/gridView/algoAnimator.js";

/* "CONTROLLER" */
// Controls communication between grid model and grid view */
export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      grid: [], // [][] of Nodes
      clear: false,
      algoDisplayed: false,
      algoSelected: "dijkstra",
      generated: false,
    };
    this.gridRef = createRef();
    this.maxRow = 0;
    this.maxCol = 0;
    this.start_row = 0;
    this.start_col = 0;
    this.end_row = 0;
    this.end_col = 0;
  }

  // Components & functions dependent on lifecycles:
  componentDidMount() {
    /* Initiate grid: */
    /* (dynamically calculate max size of board from window dimensions in View)*/
    this.gridInit();
  }
  componentDidUpdate() {
    this.setState({ clear: false });
    this.setState({ generated: false });
  }

  /* ***************************************************************** */
  /* ++++++++++++++++++++++ ALGORITHMS HANDLERS ++++++++++++++++++++++ */

  prepareAlgo = () => {
    this.clearGridBeforeAlgo();
    if (this.state.algoSelected === "dijkstra") {
      var pathArrays = dijkstra(this.state.grid);
    } else if (this.state.algoSelected === "astar") {
      pathArrays = Astar(this.state.grid);
    } else if (this.state.algoSelected === "bestfs") {
      pathArrays = bestFS(this.state.grid);
    } else if (this.state.algoSelected === "breadthfs") {
      pathArrays = breadthFS(this.state.grid);
    } else if (this.state.algoSelected === "depthfs") {
      pathArrays = depthFS(this.state.grid);
    }
    return pathArrays;
  };

  startAlgo = () => {
    const pathArrays = this.prepareAlgo();
    animateSearch(pathArrays.mappedFunction);
    animatePath(pathArrays.finalPath, pathArrays.mappedFunction);
    notActive(pathArrays.finalPath, pathArrays.mappedFunction);
    this.setState({ algoDisplayed: true });
  };

  recalculateAlgo = () => {
    const pathArrays = this.prepareAlgo();
    recalcAlgo(pathArrays.finalPath, pathArrays.mappedFunction);
    this.setState({ algoDisplayed: true });
  };

  chooseAlgo = (algoType) => {
    this.setState({ algoSelected: algoType }, () => {
      if (!isWeightAvailable(this.state.algoSelected)) {
        if (isWeightOnGrid(this.state.grid, this.maxCol, this.maxRow)) {
          this.clearGrid();
        }
      }
    });
  };

  weightedAlgo = () => {
    return isWeightAvailable(this.state.algoSelected);
  };

  // ---------------- MAZES & PATTERNS ----------------- //
  // STAIRS
  generateStairs = () => {
    this.clearGridBeforeAlgo();
    this.clearGrid();
    setTimeout(() => {
      const [stairsMapped, stairsGrid] = stairs(this.state.grid);
      animateGenerated(stairsMapped);
      setTimeout(() => {
        this.setState({ grid: stairsGrid }, () => {
          this.setState({ generated: true }, () => {
            deanimateGeneratedAfter();
          });
        });
      }, 20 * (stairsMapped.length + 40));
    }, 20);
  };

  // MAZE
  generateMaze = () => {
    this.clearGridBeforeAlgo();
    this.clearGrid();
    setTimeout(() => {
      const [mazeMapped, mazeGrid] = randomizedMaze(this.state.grid);
      animateGenerated(mazeMapped);
      setTimeout(() => {
        this.setState({ grid: mazeGrid }, () => {
          this.setState({ generated: true }, () => {
            deanimateGeneratedAfter();
          });
        });
      }, 20 * (mazeMapped.length + 40));
    }, 20);
  };

  isWall = (col, row) => {
    return this.state.grid[row][col].locator === "wall" ? true : false;
  };

  /* ******************* Methods for GRID handling ******************* */
  /* ***************************************************************** */
  // Get basic props of grid for initialization
  getRowCol = (maxRow, maxCol, st_row, st_col, en_row, en_col) => {
    this.maxRow = maxRow;
    this.maxCol = maxCol;
    this.start_row = st_row;
    this.start_col = st_col;
    this.end_row = en_row;
    this.end_col = en_col;
  };
  // Initialize grid
  gridInit = () => {
    const newGrid = setGrid(
      this.maxRow,
      this.maxCol,
      this.start_row,
      this.start_col,
      this.end_row,
      this.end_col
    );
    this.setState({ grid: newGrid });
  };
  /* +++++++++++++++++ GRID UPDATE +++++++++++++++++ */
  gridUpdate = (j, i, loc) => {
    // Update grid by utilizing input from mouse handlers
    /* Mutates grid state directly (to avoid unnecessary re-rendering of thousands of nodes) */
    /* Synchronizes grid view and logic */
    const newGrid = this.state.grid.slice();
    const node = newGrid[i][j];
    const newNode = {
      ...node,
      locator: loc,
    };
    newGrid[i][j] = newNode;
    this.state.grid = newGrid;
    //this.setState({ grid: newGrid });
  };

  /* +++++++++++++++ CLEAR FULL GRID +++++++++++++++ */
  clearGrid = async () => {
    // Clear GridView -> NodeView
    this.setState({ clear: true });

    // Clear Grid -> Node
    const newGrid = this.state.grid.slice();
    for (var i = 0; i < this.maxCol; i++) {
      for (var j = 0; j < this.maxRow; j++) {
        // Reset every Node to initial state
        var node = newGrid[j][i];
        var loc = node.locator;
        if (
          loc === "wall" ||
          loc === "weight" ||
          loc === "path" ||
          loc === "algo"
        ) {
          loc = "";
        }
        const newNode = {
          ...node,
          type: "norm",
          locator: loc,
        };
        newGrid[j][i] = newNode;
        if (node.locator === "path" || node.locator === "algo") {
          document.getElementById(`node-${node.row}-${node.col}`).className =
            "node norm";
        } else {
          document.getElementById(`node-${node.row}-${node.col}`).className =
            "node norm " + node.locator;
        }
      }
    }
    this.setState({ grid: newGrid, algoDisplayed: false });
  };

  /* +++++++++++ CLEAR GRID BEFORE ALGO +++++++++++ */
  // Clears only algo vars: isVisited, previousNode, distance
  clearGridBeforeAlgo = () => {
    // Clear Grid -> Node
    const newGrid = this.state.grid.slice();
    for (var i = 0; i < this.maxCol; i++) {
      for (var j = 0; j < this.maxRow; j++) {
        // Reset every Node to initial state
        var node = newGrid[j][i];
        const newNode = {
          ...node,
          isVisited: false,
          previousNode: null,
          distance: Infinity,
          totalDistance: Infinity,
        };
        newGrid[j][i] = newNode;
        if (node.locator === "path" || node.locator === "algo") {
          document.getElementById(`node-${node.row}-${node.col}`).className =
            "node norm";
        } else {
          document.getElementById(`node-${node.row}-${node.col}`).className =
            "node norm " + node.locator;
        }
        if (node.locator === "weight") {
          document.getElementsByClassName(`hand-path`).className = "hand";
        }
      }
    }
    this.setState({ grid: newGrid, algoDisplayed: false });
  };

  /* *********************************************************************** */
  /* ************************ Render header & grid ************************* */

  render() {
    return (
      <div>
        <Header
          clearBoard={this.clearGrid}
          algo={this.startAlgo}
          generateStairs={this.generateStairs}
          generateMaze={this.generateMaze}
          algoSelected={this.chooseAlgo}
        />

        <div className="full-grid">
          <GridView
            ref={this.gridRef}
            gridMax={this.getRowCol}
            gridUpdate={this.gridUpdate}
            clear={this.state.clear}
            algoDisplayed={this.state.algoDisplayed}
            algoRecalculate={this.recalculateAlgo}
            generated={this.state.generated}
            isWall={this.isWall}
            weighted={this.weightedAlgo}
          />
        </div>
      </div>
    );
  }
}
