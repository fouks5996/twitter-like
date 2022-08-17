import React, { useReducer } from "react";
import CreatePost from "../components/posts/CreatePost";
import PostsSection from "../components/posts/PostsSection";

function Home() {
	const [recucerValue, forceUpdate] = useReducer((x) => x + 1, 0);

	return (
		<div className='dark:bg-black py-10 pt-10 flex flex-col items-center  justify-center w-full'>
			<h1 className='text-3xl font-bold '>Bienvenue sur Twitter 2.0</h1>
			<CreatePost forceUpdate={forceUpdate} />
			<PostsSection recucerValue={recucerValue} forceUpdate={forceUpdate} />
		</div>
	);
}

export default Home;
