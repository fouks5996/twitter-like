import { useSetAtom } from "jotai";
import { RESET } from "jotai/utils";
import Cookies from "js-cookie";
import React from "react";
import { useNavigate } from "react-router-dom";
import { getToken, userId } from "../../atoms/user";

function LogoutBtn() {
	let navigate = useNavigate();
	let setLogged = useSetAtom(getToken);
	let current_userId = useSetAtom(userId);

	const Logout = () => {
		Cookies.remove("token");
		setLogged(false);
		current_userId(RESET);
		navigate("/signin", { replace: true });
	};

	return (
		<div>
			<button
				className='bg-blue-twiter text-white text-sm font-bold rounded-3xl py-2 px-4'
				onClick={Logout}>
				Se déconnecter
			</button>
		</div>
	);
}

export default LogoutBtn;
