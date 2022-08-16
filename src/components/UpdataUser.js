import { useAtom, useAtomValue, useSetAtom } from "jotai";
import React from "react";
import { userName, userEmail } from "../atoms/user";

function UpdataUser({ data }) {
	const API_URL = `http://localhost:1337/api/users/${data.id}`;

	const [userNames, setUserName] = useAtom(userName);
	const [userEmails, setUserEmail] = useAtom(userEmail);

	const handleSubmit = (e) => {
		e.preventDefault();

		const data = {
			username: e.target.username.value,
			email: e.target.email.value,
		};

		fetch(API_URL, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		})
			.then(function (response) {
				return response.json();
			})
			.then(function (data) {
				setUserName(data.username);
				setUserEmail(data.email);
				console.log(data);
			});
	};
	return (
		<div>
			<form className='flex flex-col max-w-xs' onSubmit={handleSubmit}>
				<label> Username </label>
				<input
					defaultValue={userNames}
					className='border border-gray-400'
					type='text'
					name='username'
				/>

				<label> Email </label>
				<input
					defaultValue={userEmails}
					className='border border-gray-400'
					type='text'
					name='email'
				/>

				<input
					className='py-2 px-4 mt-4 bg-slate-200 cursor-pointer'
					type='submit'
					value='submit'
				/>
			</form>
		</div>
	);
}

export default UpdataUser;
