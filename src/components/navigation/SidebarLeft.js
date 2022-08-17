import { useAtomValue } from "jotai";
import React from "react";
import { NavLink } from "react-router-dom";
import { getToken, userName } from "../../atoms/user";
import HomeIcon from "../../svg/HomeIcon";
import TwitterLogo from "../../svg/TwitterLogo";
import UserIcon from "../../svg/UserIcon";
import useFetch from "../../hooks/useFetch";
import Cookies from "js-cookie";
const API_URL = "http://localhost:1337/api/users/me";

function SidebarLeft(props) {
	let activeClassName = "text-blue-twiter";
	let logged = useAtomValue(getToken);
	const newuserName = useAtomValue(userName);

	const [data] = useFetch(API_URL);

	return (
		<div className='flex flex-col items-end border-r h-screen pr-10 pt-8 border-slate-300 w-1/4 sticky top-0'>
			<div>
				<div className='flex items-center font-bold text-xl gap-4'>
					<TwitterLogo />
					Twitter
				</div>
				<NavLink
					className={({ isActive }) => (isActive ? activeClassName : undefined)}
					to='/'>
					<span className='flex items-center gap-2 mt-10 font-semibold'>
						<HomeIcon /> Home
					</span>
				</NavLink>

				{Cookies.get("token") != undefined && (
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
