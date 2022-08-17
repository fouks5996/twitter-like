import { useAtomValue } from "jotai";
import React from "react";
import { NavLink } from "react-router-dom";
import { getToken, userName } from "../../atoms/user";
import HomeIcon from "../../svg/HomeIcon";
import TwitterLogo from "../../svg/TwitterLogo";
import UserIcon from "../../svg/UserIcon";
import useFetch from "../../hooks/useFetch";

function SidebarLeft(props) {
	// Variables
	const newuserName = useAtomValue(userName);
	const API_URL = "http://localhost:1337/api/users/me";
	const [data] = useFetch(API_URL);
	let logged = useAtomValue(getToken);
	let activeClassName = "text-blue-twiter";

	return (
		<div className='flex flex-col items-end border-r h-screen pr-10 pt-8 border-slate-300 w-1/4 sticky top-0'>
			<div>
				<div className='flex items-center font-bold text-xl gap-4'>
					<TwitterLogo />
					Twitter
				</div>
				{logged && (
					<NavLink
						className={({ isActive }) =>
							isActive ? activeClassName : undefined
						}
						to='/'>
						<span className='flex items-center gap-2 mt-10 font-semibold'>
							<HomeIcon /> Home
						</span>
					</NavLink>
				)}
				{logged && (
					<NavLink
						className={({ isActive }) =>
							isActive ? activeClassName : undefined
						}
						to='/user'>
						<span className='flex items-center gap-2 mt-4 font-semibold'>
							<UserIcon />
							{newuserName === undefined ? `${data.name}` : `${newuserName}`}
						</span>
					</NavLink>
				)}
			</div>
		</div>
	);
}

export default SidebarLeft;
