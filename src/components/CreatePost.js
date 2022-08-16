import { useAtomValue } from "jotai";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userId, userName } from "../atoms/user";

function CreatePost() {
	let API_URL = "http://localhost:1337/api/posts";
	let current_userId = useAtomValue(userId);
	let username = useAtomValue(userName);

	var p = document.createElement("div");

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

				// window.location.reload();
				// navigate("/", { replace: true });
			});

		// setTimeout(() => {
		// 	let trash = document.getElementById("trash");
		// 	let todelete = document.getElementById("toDelete");
		// 	trash.addEventListener("click", () => {
		// 		todelete.style.display = "none";
		// 	});
		// }, "20");

		p.insertAdjacentHTML(
			"afterbegin",
			`<div id="toDelete" style="margin-top:20px; position:relative">
						<a style="font-size:14px; color:rgb(156 163 175)" href="/user"> ${username} </a>
						<p> ${e.target.description.value} </p>
						<div id="trash" style="position:absolute; right:-1px; bottom:-20px; cursor:pointer"> 
							<svg
							xmlns='http://www.w3.org/2000/svg'
							style="width:24px"
							onClick={handleClick}
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
							strokeWidth='1'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
							/>
						</svg>
					</div>
				</div>`
		);
		setTimeout(() => {
			let parentContainer = document.getElementById("container");
			parentContainer.appendChild(p);
		}, "10");
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
