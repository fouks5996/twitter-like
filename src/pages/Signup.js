import React from "react";
import Cookies from "js-cookie";
import { useSetAtom } from "jotai";
import { getToken, userId } from "../atoms/user";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
	// Variables
	let setLogged = useSetAtom(getToken);
	let current_userId = useSetAtom(userId);
	let navigate = useNavigate();
	const API_URL = "http://localhost:1337/api/auth/local/register";

	// Functions
	const handleSubmit = (e) => {
		e.preventDefault();
		const data = {
			username: e.target.username.value,
			email: e.target.email.value,
			password: e.target.password.value,
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
				setLogged(true);
				current_userId(data.user.id);
				navigate("/", { replace: true });
				Cookies.set("token", data.jwt);
			})
			.catch((err) => {
				alert("Votre pseudo doit faire plus de 3 lettres, réessayer");
				setLogged(false);
			});
	};

	return (
		<div className='my-0 mx-auto flex flex-col items-center justify-center w-full'>
			<h1 className='text-3xl font-bold mt-10 mb-6'> Créer un compte </h1>
			<form
				className='flex flex-col justify-center items-center'
				onSubmit={handleSubmit}>
				<div className='flex flex-col'>
					<label className='ml-2 mb-1 text-gray-400 text-sm font-semibold'>
						{" "}
						Nom d'utilisateur{" "}
					</label>
					<input
						className='border pl-4 border-gray-300 h-11 w-96 rounded-3xl placeholder:text-sm placeholder:text-slate-300'
						type='text'
						placeholder='John Doe'
						name='username'
					/>
				</div>
				<div className='flex flex-col'>
					<label className='ml-2 mb-1 mt-5 text-gray-400 text-sm font-semibold'>
						{" "}
						Email{" "}
					</label>
					<input
						className='border pl-4 border-gray-300 h-11 w-96 rounded-3xl placeholder:text-sm placeholder:text-slate-300'
						type='text'
						placeholder='John Doe'
						name='email'
					/>
				</div>
				<div className='flex flex-col'>
					<label className='ml-2 mb-1 mt-5 text-gray-400 text-sm font-semibold'>
						{" "}
						Mot de passe{" "}
					</label>
					<input
						className='border pl-4 border-gray-300 h-11 w-96 rounded-3xl placeholder:text-sm placeholder:text-slate-300 '
						type='password'
						name='password'
					/>
				</div>
				<input
					className='bg-blue-twiter mt-6 text-white text-sm font-bold rounded-3xl py-2 px-4 w-fit cursor-pointer'
					type='submit'
					value='Créer mon compte'
				/>
			</form>
			<Link to='/signin'>
				{" "}
				<p className='text-blue-twiter mt-3'>
					{" "}
					Vous avez un compte ?{" "}
					<span className='underline'> Connectez vous ! </span>{" "}
				</p>
			</Link>
		</div>
	);
}

export default Signup;
