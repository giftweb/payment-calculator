import { useState } from "react";
import "../assets/styles/App.css";
import FinalCalculation from "./display/FinalCalculation";
import NavBar from "./display/NavBar";
import PeopleForms from "./forms/PeopleForms";
import Footer from "./display/Footer";


function App() {
	const [formValues, setFormValues] = useState({});
	return (
		<div className="d-flex flex-column min-vh-100">
			<NavBar />
			<PeopleForms setFormValues={setFormValues} />
			<FinalCalculation data={formValues} />
			<Footer />
		</div>
	);
}

export default App;
