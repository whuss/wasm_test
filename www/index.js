import React from "react";
import ReactDOM from "react-dom";
import App from './src/App'

// Opt-in to Webpack hot module replacement
if (module.hot) module.hot.accept()

ReactDOM.render(
    <App />,
    document.getElementById("app")
);
