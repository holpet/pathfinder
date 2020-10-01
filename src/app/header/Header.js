import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { makeArrayMuster } from "./NodeMuster.js";
import { algoText } from "./AlgoText.js";
import "../App.css";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clickedAlgo: "dijkstra",
    };
  }

  render() {
    const musters = makeArrayMuster();
    try {
      var text = algoText(this.state.clickedAlgo);
      var weightAv = isWeightAvailable(this.state.clickedAlgo);
    } catch {
      var text = algoText("dijkstra");
      var weightAv = true;
    }
    if (!weightAv) var weighted = "weight-red";

    return (
      <div>
        {/* ----------------------- MENU NAVBAR --------------------- */}

        <Navbar id="custom-bg" bg="" variant="dark" expand="lg">
          <div className="order-0">
            <Navbar.Text id="brand">
              <span className="brand-name">
                &nbsp;&nbsp;P&nbsp;a&nbsp;t&nbsp;h
              </span>
              &nbsp;&nbsp;V&nbsp;i&nbsp;s&nbsp;u&nbsp;a&nbsp;l&nbsp;i&nbsp;z&nbsp;e&nbsp;r&nbsp;&nbsp;
            </Navbar.Text>
          </div>

          {/* ++++++++++++ dropdown menu ++++++++++++ */}

          <Navbar.Toggle
            className="mx-auto toggle-nav"
            aria-controls="basic-navbar-nav"
          />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="mx-auto collapse-nav"
          >
            <div className="mx-auto order-1">
              <Nav className="">
                <Navbar.Text>
                  {" "}
                  &nbsp;&nbsp;/&nbsp;choose&nbsp;/&nbsp;&nbsp;
                </Navbar.Text>
                <NavDropdown
                  className="dropdown-title"
                  id="header-link-alg"
                  title="ALGORITHMS"
                >
                  <div className="ddown">
                    <NavDropdown.Item
                      className="dropdown-link"
                      onClick={() => {
                        this.props.algoSelected("dijkstra");
                        this.setState({ clickedAlgo: "dijkstra" }, () => {
                          console.log("chosen dijkstra in header...");
                        });
                      }}
                    >
                      DIJKSTRA'S
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      className="dropdown-link"
                      onClick={() => {
                        this.props.algoSelected("astar");
                        this.setState({ clickedAlgo: "astar" }, () => {
                          console.log("chosen astar in header...");
                        });
                      }}
                    >
                      A*
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      className="dropdown-link"
                      onClick={() => {
                        this.props.algoSelected("bestfs");
                        this.setState({ clickedAlgo: "bestfs" }, () => {
                          console.log("chosen bestfs in header...");
                        });
                      }}
                    >
                      BEST SEARCH FIRST
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      className="dropdown-link"
                      onClick={() => {
                        this.props.algoSelected("breadthfs");
                        this.setState({ clickedAlgo: "breadthfs" }, () => {
                          console.log("chosen bredthfs in header...");
                        });
                      }}
                    >
                      BREADTH SEARCH FIRST
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      className="dropdown-link"
                      onClick={() => {
                        this.props.algoSelected("depthfs");
                        this.setState({ clickedAlgo: "depthfs" }, () => {
                          console.log("chosen depth in header...");
                        });
                      }}
                    >
                      DEPTH SEARCH FIRST
                    </NavDropdown.Item>
                  </div>
                </NavDropdown>

                {/* ++++++++++++ options menu ++++++++++++ */}

                <Navbar.Text>
                  &nbsp;&nbsp;/&nbsp;generate&nbsp;/&nbsp;&nbsp;
                </Navbar.Text>

                <div id="header-link-maze">
                  <Nav.Link
                    id="header-link"
                    onClick={() => this.props.generateMaze()}
                  >
                    {" "}
                    maze{" "}
                  </Nav.Link>
                </div>
                <div id="header-link-stairs">
                  <Nav.Link
                    id="header-link"
                    onClick={() => this.props.generateStairs()}
                  >
                    {" "}
                    stairs{" "}
                  </Nav.Link>
                </div>

                <Navbar.Text>
                  &nbsp;&nbsp;/&nbsp;vizualize&nbsp;/&nbsp;&nbsp;
                </Navbar.Text>
                <div id="header-link-clear">
                  <Nav.Link
                    id="header-link"
                    onClick={() => this.props.clearBoard()}
                  >
                    clear
                  </Nav.Link>
                </div>
                <div id="header-link-start">
                  <Nav.Link
                    id="header-link-viz"
                    onClick={() => {
                      this.props.algo();
                    }}
                  >
                    start
                  </Nav.Link>
                </div>
              </Nav>
            </div>
          </Navbar.Collapse>
          <div className="order-0">
            <Nav.Link
              id="header-link"
              href="https://github.com/holpet/pathfinder"
            >
              Github&nbsp;repository
            </Nav.Link>
          </div>
        </Navbar>

        {/* ----------------------- LEGEND NAVBAR --------------------- */}

        <Navbar>
          <Nav className="mx-auto ">
            <div className="muster-nav">
              <div className="muster-noflex">
                {musters[0]}
                <OverlayTrigger
                  key="bottom"
                  placement="bottom"
                  overlay={
                    <Tooltip id={`tooltip-start`} bsPrefix="tooltip-custom">
                      Move start node with&nbsp;&nbsp;[mouse button].
                    </Tooltip>
                  }
                >
                  <Navbar.Text className="bold-text">
                    &nbsp;&nbsp;START&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </Navbar.Text>
                </OverlayTrigger>
              </div>
              <div className="muster-noflex">
                {musters[1]}
                <OverlayTrigger
                  key="bottom"
                  placement="bottom"
                  overlay={
                    <Tooltip id={`tooltip-end`} bsPrefix="tooltip-custom">
                      Move end node with&nbsp;&nbsp;[mouse button].
                    </Tooltip>
                  }
                >
                  <Navbar.Text className="bold-text">
                    &nbsp;&nbsp;END&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </Navbar.Text>
                </OverlayTrigger>
              </div>
              <div className="muster-noflex">
                {musters[2]}
                <OverlayTrigger
                  key="bottom"
                  placement="bottom"
                  overlay={
                    <Tooltip id={`tooltip-walls`} bsPrefix="tooltip-custom">
                      Draw walls by holding down&nbsp;&nbsp;[mouse button].
                    </Tooltip>
                  }
                >
                  <Navbar.Text className="bold-text">
                    &nbsp;&nbsp;WALL&nbsp;(no&nbsp;pass)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </Navbar.Text>
                </OverlayTrigger>
              </div>
              <div className="muster-noflex">
                {musters[3]}
                <OverlayTrigger
                  key="bottom"
                  placement="bottom"
                  overlay={
                    <Tooltip id={`tooltip-weights`} bsPrefix="tooltip-custom">
                      Draw weights by holding
                      down&nbsp;&nbsp;[CTRL]&nbsp;&nbsp;+&nbsp;&nbsp;[mouse
                      button].
                    </Tooltip>
                  }
                >
                  <Navbar.Text className="bold-text">
                    &nbsp;&nbsp;
                    <span className={weighted}>
                      WEIGHT&nbsp;(passing&nbsp;is&nbsp;harder&nbsp;6:1)
                    </span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </Navbar.Text>
                </OverlayTrigger>
              </div>
              <div className="muster-noflex">
                {musters[6]}
                <OverlayTrigger
                  key="bottom"
                  placement="bottom"
                  overlay={
                    <Tooltip id={`tooltip-unvisited`} bsPrefix="tooltip-custom">
                      Draw yourself or generate random maze/stairs (above).
                    </Tooltip>
                  }
                >
                  <Navbar.Text className="bold-text">
                    &nbsp;&nbsp;UNVISITED&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </Navbar.Text>
                </OverlayTrigger>
              </div>
              <div className="muster-noflex">
                {musters[5]}
                <OverlayTrigger
                  key="bottom"
                  placement="bottom"
                  overlay={
                    <Tooltip id={`tooltip-visited`} bsPrefix="tooltip-custom">
                      Solve algorithm by clicking on&nbsp;&nbsp;[start].
                    </Tooltip>
                  }
                >
                  <Navbar.Text className="bold-text">
                    &nbsp;&nbsp;VISITED&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </Navbar.Text>
                </OverlayTrigger>
              </div>
              <div className="muster-noflex">
                {musters[4]}
                <OverlayTrigger
                  key="bottom"
                  placement="bottom"
                  overlay={
                    <Tooltip id={`tooltip-path`} bsPrefix="tooltip-custom">
                      After solving, move start/end nodes to recalculate path.
                    </Tooltip>
                  }
                >
                  <Navbar.Text className="bold-text">
                    &nbsp;&nbsp;FINAL&nbsp;PATH
                  </Navbar.Text>
                </OverlayTrigger>
              </div>
            </div>
          </Nav>
        </Navbar>

        {/* ----------------------- DESCRIPTION / HELP NAVBAR --------------------- */}

        <Navbar className="nav-description">
          <Nav className="mx-auto ">
            <div className="muster-nav">
              <div className="muster-noflex">
                <Navbar.Text className="bold-text-bigger">
                  You are solving with:&nbsp;&nbsp;
                  <span id="text-algo">
                    {text.name}
                  </span>&nbsp;&nbsp;algorithm. {text.desc}
                </Navbar.Text>
              </div>
            </div>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export const isWeightAvailable = (algoType) => {
  if (algoType === "dijkstra" || algoType === "astar") return true;
  else return false;
};
