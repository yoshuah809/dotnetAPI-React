import "./App.css";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "./Components/Home";
import Header from "./Components/Header";
//import Header from "./Components/Header";
function App() {
	return (
		<Router>
			<Header />
			<main className="py-3">
				<>
					<Route path="/" component={Home} exact />
				</>
			</main>
		</Router>
	);
}

export default App;
