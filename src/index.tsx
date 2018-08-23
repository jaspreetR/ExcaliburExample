import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./components/Hello";
import { Game } from "./components/Game";

ReactDOM.render(
    <div>
        <Hello compiler="TypeScript" framework="React" />
        <Game width={600} height={600} />
    </div>,
    document.getElementById("example")
);
