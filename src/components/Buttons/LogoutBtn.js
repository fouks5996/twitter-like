import { useSetAtom } from "jotai";
import Cookies from "js-cookie";
import React from "react";
import { useNavigate } from "react-router-dom";
import { getToken } from "../../atoms/user";

function LogoutBtn(props) {
	let navigate = useNavigate();
	let setLogged = useSetAtom(getToken);

	const removeCookie = () => {
		Cookies.remove("token");
		setLogged(false);
		navigate("/signin", { replace: true });
	};

	return (
		<div>
			<button
				className='bg-blue-twiter text-white text-sm font-bold rounded-3xl py-2 px-4'
				onClick={removeCookie}>
				se déconnecter
			</button>
		</div>
	);
}

export default LogoutBtn;
