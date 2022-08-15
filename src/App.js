import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import About from "./pages/About";
import Home from "./pages/Home";

function App() {
	return (
		<div className='App'>
			<Navigation />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
			</Routes>
		</div>
	);
}

export default App;
