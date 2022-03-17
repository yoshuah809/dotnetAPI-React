import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

import "./bootstrap.min.css";
import { DataProvider } from "./Context/DataContext";

ReactDOM.render(
	<DataProvider>
		<App />
	</DataProvider>,

	document.getElementById("root")
);
