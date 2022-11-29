import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {
	BrowserRouter,
	generatePath,
	Routes,
	Route,
	useNavigate,
	useParams,
} from "react-router-dom";
import ListPacienteComponent from "./components/ListPacienteComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import CreatePacienteComponent from "./components/CreatePacienteComponent";
import UpdatePacienteComponent from "./components/UpdatePacienteComponent";
import ViewPacienteComponent from "./components/ViewPacienteComponent";

function App() {
	return (
		<div>
			<HeaderComponent />
			<BrowserRouter>
				<div className="container">
					<Routes>
						<Route path="/" element={<ListPacienteComponent />}></Route>
						<Route path="/view/:id" element={<ViewPacienteComponent />}></Route>
						<Route
							path="/add/:id"
							element={<CreatePacienteComponent />}
						></Route>
						<Route
							path="/update/:id"
							element={<UpdatePacienteComponent />}
						></Route>
					</Routes>
				</div>
			</BrowserRouter>
			<FooterComponent />
		</div>
	);
}

export default App;
