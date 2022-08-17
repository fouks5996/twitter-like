import { useAtomValue, useAtom } from "jotai";
import Cookies from "js-cookie";
import React from "react";
import { getToken, loggedOrnot } from "../../atoms/user";
import LogoutBtn from "../Buttons/LogoutBtn";

function SidebarRight(props) {
	let logged = useAtomValue(getToken);
	let [log, setLog] = useAtom(loggedOrnot);

	console.log(log);
	console.log(setLog);
	console.log(Cookies.get("token"));
	console.log(logged);
	return (
		<div className='flex flex-col border-l h-screen pl-10 pt-8 border-slate-300 w-1/4 sticky top-0'>
			{Cookies.get("token") != undefined && <LogoutBtn />}
		</div>
	);
}

export default SidebarRight;
