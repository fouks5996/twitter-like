import React, { useEffect, useState } from "react";

function HeartIcon({ likeCount, postid }) {
	const [like, setLike] = useState(0);

	useEffect(() => {
		setLike((like) => like === 0);
	}, [likeCount]);

	const addLikes = () => {
		setLike((like) => like + 1);
		const requestOptions = {
			method: "PUT",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				data: {
					likes: likeCount + 1,
				},
			}),
		};
		fetch(`http://localhost:1337/api/posts/${postid}`, requestOptions)
			.then((response) => response.json())
			.then((res) => res);
	};

	if (like > 1) {
		setLike((like) => like - 1);
	}

	return (
		<div onClick={addLikes} className='flex items-center gap-1 mt-4'>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				className='h-6 w-6  cursor-pointer'
				fill='none'
				viewBox='0 0 24 24'
				stroke='currentColor'
				strokeWidth='1'>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
				/>
			</svg>
			<p> {likeCount + like} </p>
		</div>
	);
}

export default HeartIcon;
