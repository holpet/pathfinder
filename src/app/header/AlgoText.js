import React from "react";

export const algoText = (algoType) => {
  if (algoType === "dijkstra") return dijkstraText();
  else if (algoType === "astar") return astarText();
  else if (algoType === "bestfs") return bestfsText();
  else if (algoType === "breadthfs") return breadthfsText();
  else if (algoType === "depthfs") return depthfsText();
};

function dijkstraText() {
  var text = { name: null, desc: null };
  text.name = "DIJKSTRA'S";
  text.desc =
    "This algorithm guarantees shortest path. It can be weighted or unweighted (takes edge costs into account). No heuristic (distance measure) is used.";
  return text;
}

function astarText() {
  var text = { name: null, desc: null };
  text.name = "A* (A-STAR)";
  text.desc =
    "This algorithm guarantees shortest path. It can be weighted or unweighted (takes edge costs into account). Uses heuristic (distance measure). Maximum effectivity for pathfinding.";
  return text;
}

function bestfsText() {
  var text = { name: null, desc: null };
  text.name = "BEST FIRST SEARCH";
  text.desc =
    "This algorithm guarantees shortest path. It can be only unweighted (doesn't take edge costs into account). Uses heuristic (distance measure).";
  return text;
}

function breadthfsText() {
  var text = { name: null, desc: null };
  text.name = "BREADTH FIRST SEARCH";
  text.desc =
    "This algorithm guarantees shortest path. It can be only unweighted (doesn't take edge costs into account). No heuristic (distance measure) is used.";
  return text;
}

function depthfsText() {
  var text = { name: null, desc: null };
  text.name = "DEPTH FIRST SEARCH";
  text.desc =
    "This algorithm doesn't guarantee shortest path. It can be only unweighted (doesn't take edge costs into account). It is often used e.g. to identify connected nodes in a graph component.";
  return text;
}
