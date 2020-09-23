import React, { PureComponent } from "react";
import "./NodeMuster.css";
import startSVG from "../../img/start.svg";
import endSVG from "../../img/flag.svg";
import bgSVG from "../../img/dot_full.svg";
import weightSVG from "../../img/hold.svg";

function renderNodeMuster(type, locator, classAs, idAs) {
  return (
    <NodeMuster
      key={idAs} // unique identification for React components (returns undefined if called)
      type={type}
      locator={locator}
      classAs={classAs}
      idAs={idAs}
    />
  );
}

export const makeArrayMuster = () => {
  var nodeMuster = [];
  // start & end
  nodeMuster.push(
    renderNodeMuster("norm", "start", "muster-start muster-not-active", "start")
  );
  nodeMuster.push(
    renderNodeMuster("norm", "end", "muster-end muster-not-active", "end")
  );
  // wall & weight
  nodeMuster.push(
    renderNodeMuster("norm", "wall", "muster-wall muster-not-active", "wall")
  );
  nodeMuster.push(
    renderNodeMuster(
      "norm",
      "weight",
      "muster-weight muster-not-active",
      "weight"
    )
  );
  // final path & visited & unvisited
  nodeMuster.push(
    renderNodeMuster("norm", "", "muster-path muster-not-active", "path")
  );
  nodeMuster.push(
    renderNodeMuster("norm", "", "muster-algo muster-not-active", "algo")
  );
  nodeMuster.push(
    renderNodeMuster("norm", "", "muster-norm muster-not-active", "norm")
  );
  return nodeMuster;
};

class NodeMuster extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      type: props.type,
      locator: props.locator,
      classAs: props.classAs,
      idAs: props.idAs,
    };
  }

  render() {
    return (
      <div className={"muster-node-wrapper"}>
        <button
          // Class/id properties
          className={
            "muster-node " + this.state.type + " " + this.state.classAs
          }
          id={"muster-" + this.state.idAs}
        >
          {setImgLocator(this.state.locator)}
        </button>
      </div>
    );
  }
}

function setImgLocator(loc) {
  var cls = "loc";
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
          className="hand"
          src={weightSVG}
          draggable="false"
          alt="Weight node BG"
        />
      </div>
    );
}
