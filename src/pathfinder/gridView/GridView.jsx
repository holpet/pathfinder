import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import NodeView from "./NodeView.jsx";
import "./Grid.css";
import { mouseHandler } from "./MouseHandler.jsx";
import { LinkedList } from "mnemonist";

export default class GridView extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      mouseIsPressed: false, // True on "mousedown", changes back to false on "mouseup"
      currentLocator: "", // Keeps track of state locator on "mousedown"
      currentType: "norm", // Keeps track of state type on "mousedown"
      currentID: 0,
      gridMax: props.gridMax,
      gridUpdate: props.gridUpdate,
      dict: {},
      clear: false,
      algoDisplayed: false,
      algoRecalculate: props.algoRecalculate,
      generated: false,
      isWall: props.isWall,
      weighted: props.weighted,
    };
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.clear !== this.props.clear) {
      this.setState({ clear: nextProps.clear });
    }
    if (nextProps.algoDisplayed !== this.props.algoDisplayed) {
      this.setState({ algoDisplayed: nextProps.algoDisplayed });
    }
    if (nextProps.generated !== this.props.generated) {
      this.setState({ generated: true });
      console.log("generated from grid...");
    }
  }

  componentDidUpdate() {
    this.setState({ clear: false });
    this.setState({ generated: false });
  }

  /* ******************* Methods on the grid ******************* */
  /* Set the grid dictionary -> faster lookup of nodes for handlers */
  //dict = {};
  setDict = (node) => {
    this.state.dict[node.props.nodeID] = node;
  };
  getDict = () => {
    return this.state.dict;
  };
  count = 0;
  setRef = (ref) => {
    /*
    if (ref.state.locator === "wall") console.log(ref);
    this.state.dict[this.count] = ref;
    this.count++;*/
  };
  getStartNode = () => {
    for (var key in this.state.dict) {
      var value = this.state.dict[key];
      if (value.state.locator === "start") return key;
      if (value.state.locator === "wall") return key;
    }
    return;
  };

  /* Set the grid linkedlist -> track past user moves on the board */
  linkedList = new LinkedList();
  addItemToLL = (id) => {
    // add item at the beginning
    this.linkedList.unshift(id);
  };
  getFirstItemFromLL = () => {
    return this.linkedList.first();
  };
  shiftFirstItemFromLL = () => {
    return this.linkedList.shift();
  };

  /* *********************************************************** */
  /* ********************* Render functions ******************** */

  /* Render SQUARE */
  renderNode(i, j, nodeID, st_row, st_col, en_row, en_col) {
    var locatorProp = setLocators(i, j, st_row, st_col, en_row, en_col);
    return (
      <NodeView
        ref={this.setRef}
        key={nodeID} // unique identification for React components (returns undefined if called)
        nodeID={nodeID} // id to use for dict keys (returns defined)
        row={i}
        col={j}
        type="norm"
        locator={locatorProp}
        mouseEvents={mouseHandler}
        gridView={this}
        gridUpdate={this.state.gridUpdate}
        clear={this.state.clear}
        generated={this.state.generated}
        isWall={this.state.isWall}
        weighted={this.state.weighted}
      />
    );
  }
  /* Render GRID (filled with SQUARES) */
  render() {
    const grid = [];
    const [maxCol, maxRow] = getRowCol();
    const [st_row, st_col, en_row, en_col] = getLocators(maxCol, maxRow);

    this.state.gridMax(maxCol, maxRow, st_row, st_col, en_row, en_col);
    var countNodeID = 0;

    for (var i = 0; i < maxCol; i++) {
      const nodeRows = [];
      for (var j = 0; j < maxRow; j++) {
        // render node
        nodeRows.push(
          this.renderNode(j, i, countNodeID, st_row, st_col, en_row, en_col)
        );
        countNodeID++;
      }
      grid.push(<div key={i}>{nodeRows}</div>);
    }
    this.ctn = 0;
    return <div className="grid">{grid}</div>;
  }
}

/* *********************************************************** */
/* ******************** Helper functions ********************* */

// Calculate how many nodes in a row & col (based on viewport size)
function getRowCol() {
  var nodeSize = 35; // Max w/h of accurately visible nodes - for FULL HD res
  /*
  if (window.screen.width < 576) nodeSize = 25;
  if (window.screen.width < 768) nodeSize = 28;
  if (window.screen.width < 1200) nodeSize = 31;*/

  var num_i = Math.floor(window.screen.width / nodeSize) - 1;
  var num_j = Math.floor(
    (window.screen.height - (window.screen.height / 100) * 35) / nodeSize
  );
  //if (num_i % 2 !== 0) num_i++;
  if (num_j % 2 !== 1) num_j++;
  console.log("i " + num_i + " j " + num_j);
  return [num_i, num_j];
}

// Decide where to place locators on the grid
function getLocators(maxCol, maxRow) {
  const st_row = Math.floor(maxRow / 2) - 1;
  const st_col = Math.floor(maxCol / 3);
  const en_row = Math.floor(maxRow / 2) - 1;
  const en_col = Math.floor((maxCol / 3) * 2);
  // console.log(
  //   "start+end r/c: " + st_row + " " + st_col + " .. " + en_row + " " + en_col
  // );
  return [st_row, st_col, en_row, en_col];
}

// Place locators on the grid
function setLocators(j, i, start_row, start_col, end_row, end_col) {
  var locatorProp = "";
  if (j === start_row && i === start_col) {
    locatorProp = "start";
    return locatorProp;
  }
  if (j === end_row && i === end_col) {
    locatorProp = "end";
    return locatorProp;
  }
  return locatorProp;
}

GridView.propTypes = {
  gridMax: PropTypes.func,
  gridUpdate: PropTypes.func,
  clear: PropTypes.bool,
};
