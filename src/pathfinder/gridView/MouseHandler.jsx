export const mouseHandler = (event, node, grid, gridUpdate, weighted) => {
  /* Info about changing the state of objects: */
  // setState used for safely re-rendering objects on change (immutable render)
  // directly mutating state only when there is no need to re-render (e.g. "mouseIsPressed" var)

  /* ------------------ on MOUSE DOWN ------------------ */
  if (event.type === "mousedown") {
    grid.state.mouseIsPressed = true;
    // CURRENT...: starting node for the mouse move (relevant until the move finishes with "mouseup")
    // -- determines what locator will be added/deleted throughout the mouse move
    grid.state.currentLocator = node.state.locator;
    grid.state.currentType = node.state.type;
    grid.state.currentID = node.state.nodeID;

    /* ------------------ on MOUSE UP ------------------ */
  }
  if (event.type === "mouseup") {
    grid.state.mouseIsPressed = false;

    // Simulate simple click of the mouse on a node:
    if (grid.state.currentID === node.state.nodeID) {
      var loc = "wall";
      if (event.ctrlKey && weighted()) loc = "weight";
      // Add wall block locator if user clicked on free space
      if (node.state.locator === "") {
        node.setState({ locator: loc });
        gridUpdate(node.state.row, node.state.col, loc);
      }
      // Delete wall block locator if user clicked on a wall block already in place
      if (node.state.locator === loc) {
        node.setState({ locator: "" });
        gridUpdate(node.state.row, node.state.col, "");
      }
    }

    /* ------------------ on MOUSE ENTER ------------------ */
  }
  if (event.type === "mouseenter") {
    node.setState({ noHover: false });
    if (!grid.state.mouseIsPressed) return;

    // Keep track of the previous node to this one that we've just entered
    const prevSqID = grid.getFirstItemFromLL();
    var prevSq = grid.state.dict[grid.getFirstItemFromLL()];
    node.setState({ noHover: false }); // always allow for hover functionality until set otherwise (noHover: true)

    if (
      // ................. MOVE START & TARGET LOCATORS ................. //
      grid.state.currentLocator === "start" ||
      grid.state.currentLocator === "end"
    ) {
      // If entered node is either start/target: don't allow hover anim and don't delete locator from previous node
      if (node.state.locator !== "") node.setState({ noHover: true });
      // If entered node is a FREE space:
      else {
        // Allow anim, add currently held locator in place -> update
        node.setState({ noHover: false, locator: grid.state.currentLocator });
        gridUpdate(node.state.row, node.state.col, grid.state.currentLocator);
        // Delete previous locator (go backwards until you find the last position of the locator in the grid) -> update
        while (prevSq.state.locator !== grid.state.currentLocator) {
          grid.shiftFirstItemFromLL();
          prevSq = grid.state.dict[grid.getFirstItemFromLL()];
        }
        prevSq.setState({ locator: "" }, function () {
          if (grid.state.algoDisplayed) {
            /********************************************/
            // ALGORITHM RECALCULATION on mouse move of start/target nodes (wait until last state has been set):
            grid.state.algoRecalculate();
          }
        });
        gridUpdate(prevSq.state.row, prevSq.state.col, "");
      }

      // ................. ADD/DELETE WALL/WEIGHT BLOCKS ................. //
    } else {
      loc = "wall";
      if (event.ctrlKey && weighted()) loc = "weight";
      /********************************************/
      // ADD BLOCK
      if (
        (node.state.locator === "" ||
          node.state.locator === "wall" ||
          node.state.locator === "weight") &&
        grid.state.currentLocator === ""
      ) {
        if (prevSqID === grid.state.currentID) {
          prevSq.setState({ locator: loc });
          gridUpdate(prevSq.state.row, prevSq.state.col, loc);
        }
        node.setState({ locator: loc, noHover: false });
        gridUpdate(node.state.row, node.state.col, loc);

        /********************************************/
        // DELETE BLOCK
      } else if (
        (node.state.locator === "wall" ||
          node.state.locator === "weight" ||
          node.state.locator === "") &&
        grid.state.currentLocator === loc
      ) {
        if (prevSqID === grid.state.currentID) {
          prevSq.setState({ locator: "" });
          gridUpdate(prevSq.state.row, prevSq.state.col, "");
        }
        node.setState({ locator: "", noHover: true });
        gridUpdate(node.state.row, node.state.col, "");
      }
    }

    /* ------------------ on MOUSE LEAVE ------------------ */
  }
  if (event.type === "mouseleave" && grid.state.mouseIsPressed) {
    // Save node's ID in the LL to allow searching past user moves on next "mouseenter"
    grid.addItemToLL(node.state.nodeID);
  }
};
