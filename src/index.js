import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

import "./bootstrap.min.css";
import { EngineProvider } from "./Context/EngineContext";

ReactDOM.render(
	<EngineProvider>
		<App />
	</EngineProvider>,

	document.getElementById("root")
);
