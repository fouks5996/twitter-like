import React from "react";
import TrashIcon from "../../svg/TrashIcon";
import HeartIcon from "../../svg/HeartIcon";

function SinglePost({ post, show, forceUpdate }) {
	return (
		<div id={post.id} className='pb-6 mt-3 border-b border-gray-300'>
			<p> {post.description} </p>
			<div className='flex flex-row-reverse items-center gap-6'>
				<div>
					{" "}
					{show && <TrashIcon id={post.id} forceUpdate={forceUpdate} />}
				</div>
				<HeartIcon likeCount={post.likes} postid={post.id} />
			</div>
		</div>
	);
}

SinglePost.defaultProps = {
	show: false,
};

export default SinglePost;
