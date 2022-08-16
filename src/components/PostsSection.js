import { useAtomValue } from "jotai";
import React from "react";
import { Link } from "react-router-dom";
import { userId, userName } from "../atoms/user";
import useFetchPosts from "../hooks/useFetchPosts";
import HeartIcon from "../svg/HeartIcon";
import TrashIcon from "../svg/TrashIcon";
import SinglePost from "./SinglePost";

function PostsSection(props) {
	const [posts] = useFetchPosts(
		"http://localhost:1337/api/posts?populate=*&sort=createdAt:DESC"
	);
	let current_userId = useAtomValue(userId);

	return (
		<div className='w-full px-10 border-t border-gray-500'>
			{posts &&
				posts.data.map((post) => (
					<div id={post.id} className='py-8 border-b border-gray-300'>
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
								current_userId && <TrashIcon id={post.id} />}
							<HeartIcon likeCount={post.attributes.likes} postid={post.id} />
						</div>
					</div>
				))}
		</div>
	);
}

export default PostsSection;
