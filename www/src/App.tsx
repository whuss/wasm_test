import React, {useState, useEffect } from 'react';

import Button from "@material-ui/core/Button";

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
    const universe = Universe.new();

    const [life, setLife] = useState("test");

    useEffect(() => {
        universe.tick();
        const data = universe.render();
        setLife(universe.render())
    }, []);

    const nextFrame = () => {
        universe.tick();
        setLife(universe.render())
    }

    return (<>
        <Button
            variant="contained"
            color="primary"
            onClick={nextFrame}
        >Next frame</Button>
        <pre>{life}</pre>
    </>);
}

const App: React.FC = () => (
  <div>
    Webpack HMR Example
    <Life/>
  </div>
)

export default App