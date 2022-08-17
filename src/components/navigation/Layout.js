import React from "react";
import SidebarLeft from "./SidebarLeft";
import SidebarRight from "./SidebarRight";

function Layout({ children }) {
	return (
		<div className='flex justify-center my-0 mx-auto max-w-[1500px]'>
			<SidebarLeft /> {children} <SidebarRight />
		</div>
	);
}

export default Layout;
