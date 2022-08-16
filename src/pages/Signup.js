import React from "react";
import Cookies from "js-cookie";
import { useAtom, useSetAtom } from "jotai";
import { getToken, userId } from "../atoms/user";
import { useNavigate } from "react-router-dom";
const API_URL = "http://localhost:1337/api/auth/local/register";

function Signup(props) {
	let [logged, setLogged] = useAtom(getToken);
	let current_userId = useSetAtom(userId);

	let navigate = useNavigate();
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
			});
	};

	return (
		<div className='my-0 mx-auto flex flex-col items-center justify-center w-full'>
			<h1 className='text-2xl font-bold my-4'> Créer un compte </h1>
			<form className='flex flex-col max-w-xs' onSubmit={handleSubmit}>
				<label> Username </label>
				<input className='border border-gray-400' type='text' name='username' />
				<label> email </label>
				<input className='border border-gray-400' type='text' name='email' />
				<label> password </label>
				<input
					className='border border-gray-400'
					type='password'
					name='password'
				/>
				<input
					className='py-2 px-4 mt-4 bg-slate-200'
					type='submit'
					value='submit'
				/>
			</form>
		</div>
	);
}

export default Signup;
