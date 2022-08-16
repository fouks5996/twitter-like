import { useAtomValue } from "jotai";
import React from "react";
import { getToken } from "../atoms/user";
import LogoutBtn from "./Buttons/LogoutBtn";

function SidebarRight(props) {
	let logged = useAtomValue(getToken);
	return (
		<div className='flex flex-col border-l h-screen pl-10 pt-8 border-slate-300 w-1/4'>
			{logged && <LogoutBtn />}
		</div>
	);
}

export default SidebarRight;
