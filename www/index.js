// import { Universe } from "wasm-game-of-life";

// const pre = document.getElementById("game-of-life-canvas");
// const universe = Universe.new();

// const renderLoop = () => {
//     pre.textContent = universe.render();
//     universe.tick();

//     requestAnimationFrame(renderLoop);
// };

// requestAnimationFrame(renderLoop);

import React from "react";
import ReactDOM from "react-dom";
import App from './src/App'

// Opt-in to Webpack hot module replacement
if (module.hot) module.hot.accept()

ReactDOM.render(
    <App />,
    document.getElementById("app")
);
