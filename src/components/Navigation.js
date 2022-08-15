import React from "react";
import { NavLink } from "react-router-dom";

function Navigation(props) {
	let activeStyle = {
		textDecoration: "underline",
	};
	return (
		<div className='flex justify-center gap-20 py-5 bg-slate-100'>
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
		</div>
	);
}

export default Navigation;
