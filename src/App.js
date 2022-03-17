import "./App.css";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "./Components/Home";
import Header from "./Components/Header";
import ModalDelete from "./Components/ModalDelete";

function App() {
	return (
		<Router>
			<Header />
			<main className="py-3">
				<>
					<Route path="/" component={Home} exact />
					<Route path="/ModalDelete" component={ModalDelete} exact />
				</>
			</main>
		</Router>
	);
}

export default App;
