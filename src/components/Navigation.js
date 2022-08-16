import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useAtom } from "jotai";
import { getToken } from "../atoms/user";

function Navigation(props) {
	let activeStyle = {
		textDecoration: "underline",
	};

	let [logged, setLogged] = useAtom(getToken);
	let navigate = useNavigate();

	const removeCookie = () => {
		Cookies.remove("token");
		setLogged(false);
		navigate("/signin", { replace: true });
	};
	return (
		<div className='flex justify-center items-center gap-20 py-5 bg-slate-100'>
			<NavLink
				style={({ isActive }) => (isActive ? activeStyle : undefined)}
				to='/'>
				Home
			</NavLink>
			<NavLink
				style={({ isActive }) => (isActive ? activeStyle : undefined)}
				to='/about'>
				Profile
			</NavLink>
			{!logged && (
				<div className='flex gap-1'>
					<NavLink
						style={({ isActive }) => (isActive ? activeStyle : undefined)}
						to='/signup'>
						Créer un compte
					</NavLink>
					/
					<NavLink
						style={({ isActive }) => (isActive ? activeStyle : undefined)}
						to='/signin'>
						se connecter
					</NavLink>
				</div>
			)}
			{logged && (
				<button className='bg-slate-300 py-2 px-4' onClick={removeCookie}>
					se déconnecter
				</button>
			)}
		</div>
	);
}

export default Navigation;
