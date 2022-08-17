import { useAtomValue } from "jotai";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { userId } from "../../atoms/user";
import HeartIcon from "../../svg/HeartIcon";
import TrashIcon from "../../svg/TrashIcon";
import { useAutoAnimate } from "@formkit/auto-animate/react";

function PostsSection({ recucerValue, forceUpdate }) {
	let current_userId = useAtomValue(userId);
	let API_URL =
		"http://localhost:1337/api/posts?populate=*&sort=createdAt:DESC";

	const [posts, setData] = useState(null);
	const token = Cookies.get("token");
	const [parent] = useAutoAnimate();

	useEffect(() => {
		fetch(API_URL, {
			method: "GET",
			headers: { Authorization: `Bearer ${token}` },
		})
			.then((response) => response.json())
			.then((data) => {
				setData(data);
			});
	}, [token, API_URL, recucerValue]);

	return (
		<div id='container' ref={parent} className='w-full px-10'>
			{posts &&
				posts.data.map((post) => (
					<div
						key={post.id}
						id={post.id}
						className='py-8 border-b border-gray-300'>
						<Link
							to={"/users/" + post.attributes.users_permissions_user.data.id}>
							<p className='text-sm text-gray-400'>
								{
									post.attributes.users_permissions_user.data.attributes
										.username
								}
							</p>
						</Link>
						<p> {post.attributes.description} </p>
						<div className='flex flex-row-reverse items-center gap-6'>
							{" "}
							{post.attributes.users_permissions_user.data.id ===
								current_userId && (
								<TrashIcon id={post.id} forceUpdate={forceUpdate} />
							)}
							<HeartIcon likeCount={post.attributes.likes} postid={post.id} />
						</div>
					</div>
				))}
		</div>
	);
}

export default PostsSection;
