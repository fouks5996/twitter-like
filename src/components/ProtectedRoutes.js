import React from "react";
import { Outlet } from "react-router-dom";
import SignIn from "../pages/SignIn";
import { getToken } from "../atoms/user";
import { useAtomValue } from "jotai";
import Cookies from "js-cookie";

function ProtectedRoutes() {
	let isLoggedin = useAtomValue(getToken);
	return <div>{isLoggedin ? <Outlet /> : <SignIn />}</div>;
}

export default ProtectedRoutes;
