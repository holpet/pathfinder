# PATHFINDING VISUALIZER

Pathfinding algorithms are implemented in real life applications (e.g. Google Maps) to find the shortest path(s) from point A to point B. This project is a simplified version of such an application, where the goal is to <b>demonstrate how pathfinding algorithms work</b>: which places (parts of the grid that represents a "map") will be considered for a possible path and in which order. Once the algorithm reaches conclusion, a reconstructed (shortest) path to the target destination will be drawn on the grid.<br />

Project was written in Javascript, using the React library.<br />
[CLICK TO OPEN PROJECT](https://holpet.github.io/pathfinder/)

## Functionality description

• The main component the user will navigate is a full screen grid that contains <b>"START"</b> and <b>"END"</b> nodes. These nodes can be moved around the grid with a mouse button. <br />
• By clicking (and holding) the left mouse button, user is able to draw <b>"WALLS"</b> - or alternatively <b>"WEIGHTS"</b> (CTRL + left mouse button) that serve as hurdles on the way from "START" to "END". "WALLS" cannot be crossed, while "WEIGHTS" can - but the crossing is harder (by ratio of 6:1 to normal, non-weighted grid squares). <br />

<span style="display: block; margin-left: auto; margin-right: auto; width: 50%;">![Demo #1](/src/img/demo1.gif/)</span>

• The top site navigation bar lets the user choose from 5 different algorithms and in case they don't want to draw "WALLS" or "WEIGHTS" themselves, they can <b>generate a maze or simple stairs</b> and then <b>click "START"</b> to begin the animation for pathfinding.<br />
• By moving the "START" and "END" nodes once the solving animation is finished, the path will be recalculated and shown on the grid.<br /><br />

<span style="display: block; margin-left: auto; margin-right: auto; width: 50%;">![Demo #2](/src/img/demo2.gif/)</span>

### Additional information

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
