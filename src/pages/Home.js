import { useAtomValue } from "jotai";
import React, { useReducer } from "react";
import { NavLink } from "react-router-dom";
import { getToken } from "../atoms/user";
import CreatePost from "../components/posts/CreatePost";
import PostsSection from "../components/posts/PostsSection";

function Home(props) {
	const [recucerValue, forceUpdate] = useReducer((x) => x + 1, 0);

	let activeStyle = {
		textDecoration: "underline",
	};

	let logged = useAtomValue(getToken);

	return (
		<div className='dark:bg-black py-10 pt-10 flex flex-col items-center  justify-center w-full'>
			{" "}
			<h1 className='text-3xl font-bold '>Bienvenue sur Twitter 2.0</h1>
			<CreatePost forceUpdate={forceUpdate} />
			<PostsSection recucerValue={recucerValue} forceUpdate={forceUpdate} />
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
