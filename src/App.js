import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import ProtectedRoutes from "./components/ProtectedRoutes";
import About from "./pages/About";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Signup from "./pages/Signup";
import UserProfile from "./pages/UserProfile";
import OtherUserProfile from "./pages/OtherUserProfile";

function App() {
	return (
		<Layout>
			<div className='w-2/4'>
				<Routes>
					<Route element={<ProtectedRoutes />}>
						<Route path='/' element={<Home />} />
						<Route path='/about' element={<About />} />
						<Route path='/user' element={<UserProfile />} />
						<Route path='/users/:id' element={<OtherUserProfile />} />
					</Route>
					<Route path='/signup' element={<Signup />} />
					<Route path='/signin' element={<SignIn />} />
				</Routes>
			</div>
		</Layout>
	);
}

export default App;
