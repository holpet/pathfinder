# PATHFINDING VISUALIZER

Pathfinding algorithms are implemented in real life applications (e.g. Google Maps) to find the shortest path(s) from point A to point B. This project is a simplified version of such an application, where the goal is to <b>demonstrate how pathfinding algorithms work</b>: which places (parts of the grid that represents a "map") will be considered for a possible path and in which order. Once the algorithm reaches conclusion, a reconstructed (shortest) path to the target destination will be drawn on the grid.<br />

Project was written in Javascript, using the React library.<br />
[CLICK TO OPEN PROJECT](https://holpet.github.io/pathfinder/)

## Functionality description

• The main component the user will navigate is a full screen grid that contains <b>"START"</b> and <b>"END"</b> nodes. These nodes can be moved around the grid with a mouse button. <br />
• By clicking (and holding) the left mouse button, user is able to draw <b>"WALLS"</b> - or alternatively <b>"WEIGHTS"</b> (CTRL + left mouse button) that serve as hurdles on the way from "START" to "END". "WALLS" cannot be crossed, while "WEIGHTS" can - but the crossing is harder (by ratio of 6:1 to normal, non-weighted grid squares). <br />

![Demo #1](/src/img/demo1.gif/)

• The top site navigation bar lets the user choose from 5 different algorithms and in case they don't want to draw "WALLS" or "WEIGHTS" themselves, they can <b>generate a maze or simple stairs</b> and then <b>click "START"</b> to begin the animation for pathfinding.<br />
• By moving the "START" and "END" nodes once the solving animation is finished, the path will be recalculated and shown on the grid.<br />

![Demo #2](/src/img/demo2.gif/)

