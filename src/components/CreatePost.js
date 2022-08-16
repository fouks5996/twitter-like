import { useAtomValue } from "jotai";
import React from "react";
import { useNavigate } from "react-router-dom";
import { userId } from "../atoms/user";

function CreatePost() {
	let API_URL = "http://localhost:1337/api/posts";

	let current_userId = useAtomValue(userId);

	let navigate = useNavigate();
	const handleSubmit = (e) => {
		e.preventDefault();
		const data = {
			data: {
				description: e.target.description.value,
				users_permissions_user: current_userId,
			},
		};

		fetch(API_URL, {
			method: "post",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		})
			.then(function (response) {
				return response.json();
			})
			.then(function (data) {
				console.log(data);
				window.location.reload();
				navigate("/", { replace: true });
			});
	};

	return (
		<form className='w-full px-9 my-10' onSubmit={handleSubmit}>
			<input
				placeholder='Ecrivez ...'
				className='border pl-8 border-gray-200 rounded-2xl w-full h-20'
				type='text'
				name='description'
			/>
			<input
				className='py-2 px-4 mt-4 bg-slate-200 cursor-pointer'
				type='submit'
				value='Poster !'
			/>
		</form>
	);
}

export default CreatePost;
