import { useSetAtom } from "jotai";
import Cookies from "js-cookie";
import React from "react";
import { useNavigate } from "react-router-dom";
import { getToken, userId } from "../atoms/user";
import { Link } from "react-router-dom";

function SignIn() {
	// Variables
	let navigate = useNavigate();
	let setLogged = useSetAtom(getToken);
	let current_userId = useSetAtom(userId);
	const API_URL = "http://localhost:1337/api/auth/local";

	// Functions
	const handleSubmit = (e) => {
		e.preventDefault();
		const data = {
			identifier: e.target.identifier.value,
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
				alert("Mauvais compte, réssayez");
				setLogged(false);
			});
	};

	return (
		<div className='my-0 mx-auto flex flex-col items-center justify-center w-full'>
			<h1 className='text-3xl font-bold mt-10 mb-6'> Se connecter </h1>
			<form
				className='flex flex-col justify-center items-center'
				onSubmit={handleSubmit}>
				<div className='flex flex-col'>
					<label className='ml-2 mb-1 text-gray-400 text-sm font-semibold'>
						{" "}
						Nom d'utilisateur ou email{" "}
					</label>
					<input
						className='border pl-4 border-gray-300 h-11 w-96 rounded-3xl placeholder:text-sm placeholder:text-slate-300'
						type='text'
						placeholder='John Doe'
						name='identifier'
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
					value='Se connecter'
				/>
			</form>
			<Link to='/signup'>
				{" "}
				<p className='text-blue-twiter mt-3'>
					{" "}
					Pas de compte ? <span className='underline'>
						{" "}
						Créez en un !{" "}
					</span>{" "}
				</p>
			</Link>
		</div>
	);
}

export default SignIn;
