import React from "react";
import { Outlet } from "react-router-dom";
import SignIn from "../pages/SignIn";
import { getToken } from "../atoms/user";
import { useAtomValue } from "jotai";

function ProtectedRoutes() {
	let logged = useAtomValue(getToken);
	return <div>{logged ? <Outlet /> : <SignIn />}</div>;
}

export default ProtectedRoutes;
