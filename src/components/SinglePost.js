import React from "react";
import TrashIcon from "../svg/TrashIcon";
import HeartIcon from "../svg/HeartIcon";
import { Link } from "react-router-dom";

function SinglePost({ post, show }) {
	return (
		<div id={post.id} className='py-6 mt-3 border-b border-gray-300'>
			<p> {post.description} </p>
			<div className='flex flex-row-reverse items-center gap-6'>
				{show && <TrashIcon id={post.id} />}
				<HeartIcon likeCount={post.likes} postid={post.id} />
			</div>
		</div>
	);
}

SinglePost.defaultProps = {
	show: false,
};

export default SinglePost;
