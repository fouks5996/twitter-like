import { useAtomValue } from "jotai";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { userId } from "../atoms/user";
import useFetchPosts from "../hooks/useFetchPosts";
import SinglePost from "../components/SinglePost";

function OtherUserProfile(props) {
	let { id } = useParams();
	let navigate = useNavigate();
	let current_userId = useAtomValue(userId);

	if (parseInt(id) === current_userId) {
		navigate("/user", { replace: true });
	}

	let API_URL = `http://localhost:1337/api/users/${parseInt(
		id
	)}?populate=posts`;
	const [user] = useFetchPosts(API_URL);

	return (
		<div className='p-10'>
			{user && (
				<div>
					<div className='border-b border-gray-300 pb-4'>
						<p className='font-bold text-2xl'> {user.username} </p>
						<p className=''> {user.email} </p>
					</div>
					<div className='mt-4'>
						<h1 className='text-md font-semibold'>
							{" "}
							Voici les posts de {user.username} :
						</h1>
						<div>
							{user.posts
								.sort((a, b) => a.createdAt - b.createdAt)
								.map((post) => (
									<SinglePost post={post} />
								))}
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

export default OtherUserProfile;
