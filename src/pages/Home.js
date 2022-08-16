import { useAtomValue } from "jotai";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { getToken } from "../atoms/user";
import CreatePost from "../components/CreatePost";
import PostsSection from "../components/PostsSection";

function Home(props) {
	let activeStyle = {
		textDecoration: "underline",
	};

	let logged = useAtomValue(getToken);

	return (
		<div className=' py-10 pt-10 flex flex-col items-center bg-slate-100 justify-center w-full'>
			{" "}
			<h1 className='text-3xl font-bold '>Bienvenue sur Twitter 2.0</h1>
			<CreatePost />
			<PostsSection />
			{!logged && (
				<div className='flex gap-1'>
					<NavLink
						style={({ isActive }) => (isActive ? activeStyle : undefined)}
						to='/signup'>
						Créer un compte
					</NavLink>
					/
					<NavLink
						style={({ isActive }) => (isActive ? activeStyle : undefined)}
						to='/signin'>
						se connecter
					</NavLink>
				</div>
			)}
		</div>
	);
}

export default Home;
