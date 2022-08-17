import { useAtom } from "jotai";
import React from "react";
import { userName, userEmail } from "../../atoms/user";

function UpdataUser({ data }) {
	// Variables
	const API_URL = `http://localhost:1337/api/users/${data.id}`;
	const [userNames, setUserName] = useAtom(userName);
	const [userEmails, setUserEmail] = useAtom(userEmail);

	// Functions
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
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				setUserName(data.username);
				setUserEmail(data.email);
				console.log(data);
			})
			.catch((err) => {
				alert("Le pseudo doit faire 3 minimum caractères");
			});
	};

	return (
		<div>
			<form
				className='flex flex-col justify-center items-start mt-6'
				onSubmit={handleSubmit}>
				<div className='flex flex-col'>
					<label className='ml-2 mb-1 text-gray-400 text-sm font-semibold'>
						Nom d'utilisateur
					</label>
					<input
						defaultValue={userNames}
						className='border pl-4 border-gray-300 h-11 w-96 rounded-3xl placeholder:text-sm placeholder:text-slate-300'
						type='text'
						placeholder='John Doe'
						name='username'
					/>
				</div>
				<div className='flex flex-col mt-4'>
					<label className='ml-2 mb-1 text-gray-400 text-sm font-semibold'>
						Email
					</label>
					<input
						defaultValue={userEmails}
						className='border pl-4 border-gray-300 h-11 w-96 rounded-3xl placeholder:text-sm placeholder:text-slate-300'
						type='text'
						placeholder='John Doe'
						name='email'
					/>
				</div>

				<input
					className='bg-blue-twiter mt-6 text-white text-sm font-bold rounded-3xl py-2 px-4 w-fit cursor-pointer'
					type='submit'
					value='Modifier mon profil'
				/>
			</form>
		</div>
	);
}

export default UpdataUser;
