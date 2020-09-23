import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "./Grid.css";
import startSVG from "../../img/start.svg";
import endSVG from "../../img/flag.svg";
import bgSVG from "../../img/dot_full.svg";
import weightSVG from "../../img/hold.svg";

export default class NodeView extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      // Initial values available for change on user action
      row: props.row,
      col: props.col,
      nodeID: props.nodeID,
      type: props.type, // if 'norm' -> transparent bg, if 'wall' -> dark bg
      locator: props.locator, // if 'start' -> img start, if 'end' -> img end, if 'none' -> no img
      gridView: props.gridView,
      gridUpdate: props.gridUpdate,
      clear: props.clear,
      generated: false,
      isWall: props.isWall,
      weighted: props.weighted,

      // Function to handle all mouse events
      mouseEvents: props.mouseEvents,
      noHover: false,
    };
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.clear !== this.props.clear) {
      this.setState({ clear: nextProps.clear }, function () {
        this.clearNodeView();
      });
    }
    if (nextProps.generated !== this.props.generated) {
      if (
        this.state.isWall(this.state.row, this.state.col) &&
        this.state.locator === ""
      ) {
        this.setState({ locator: "wall" }, () => {
          this.setState({ generated: false });
        });
      }
    }
  }

  clearNodeView = () => {
    if (
      (this.state.locator === "wall" ||
        this.state.locator === "weight" ||
        this.state.locator === "path" ||
        this.state.locator === "algo") &&
      this.state.clear
    ) {
      this.setState({ locator: "" });
      this.setState({ clear: false });
    }
  };

  handleUserChanges = (event) =>
    this.props.mouseEvents(
      event,
      this,
      this.state.gridView,
      this.state.gridUpdate,
      this.state.weighted
    );

  render() {
    this.props.gridView.setDict(this);
    var cls = setHover(this.state.locator, this.state.noHover);
    return (
      <div className={"node-wrapper"}>
        <button
          // Class/id properties
          className={"node " + this.state.type + " " + cls}
          id={"node-" + this.state.row + "-" + this.state.col}
          // Mouse events handlers:
          onMouseUp={this.handleUserChanges}
          onMouseDown={this.handleUserChanges}
          onMouseOver={this.handleUserChanges}
          onMouseEnter={this.handleUserChanges}
          onMouseLeave={this.handleUserChanges}
        >
          {setImgLocator(
            this.state.locator,
            this.state.noHover,
            this.state.row,
            this.state.col
          )}
        </button>
      </div>
    );
  }
}

function setImgLocator(loc, noHover, row, col) {
  var cls = "loc";
  if (noHover) {
    cls = "";
  }
  if (loc === "start")
    return (
      <div className={"rel " + cls}>
        <img className="bg" src={bgSVG} draggable="false" alt="Start node BG" />
        <img
          className="img st"
          src={startSVG}
          draggable="false"
          alt="Start node"
        />
      </div>
    );
  if (loc === "end")
    return (
      <div className={"rel " + cls}>
        <img
          className="bg"
          src={bgSVG}
          draggable="false"
          alt="Target node BG"
        />
        <img
          className="img en"
          src={endSVG}
          draggable="false"
          alt="Target node"
        />
      </div>
    );
  if (loc === "weight")
    return (
      <div className={"rel loc"}>
        <img
          id={"img-" + row + "-" + col}
          className="hand"
          src={weightSVG}
          draggable="false"
          alt="Weight node BG"
        />
      </div>
    );
}

function setHover(loc, noHover) {
  if (loc === "wall" && noHover) {
    return "wall-no-anim";
  } else if (loc === "weight" && noHover) {
    return "weight-no-anim";
  }
  return loc;
}

NodeView.propTypes = {
  row: PropTypes.number,
  col: PropTypes.number,
  nodeID: PropTypes.number,
  type: PropTypes.string,
  locator: PropTypes.string,
  gridView: PropTypes.object,
  gridUpdate: PropTypes.func,
  mouseEvents: PropTypes.func,
  noHover: PropTypes.bool,
  clear: PropTypes.bool,
};
