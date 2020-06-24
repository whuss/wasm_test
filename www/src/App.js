import React, {useState} from 'react';

import { Universe } from "wasm-game-of-life";

// const pre = document.getElementById("game-of-life-canvas");
// const universe = Universe.new();

// const renderLoop = () => {
//     pre.textContent = universe.render();
//     universe.tick();

//     requestAnimationFrame(renderLoop);
// };

// requestAnimationFrame(renderLoop);

const Life = () => {
    const [universe, setUniverse] = useState(Universe.new());

    return <pre>{universe.render()}</pre>;
}

const App = ({ props }) => (
  <div>
    Webpack HMR Example
    <Life/>
  </div>
)

export default App