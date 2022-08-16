import { useAtom, useSetAtom } from "jotai";
import Cookies from "js-cookie";
import React from "react";
import { useNavigate } from "react-router-dom";
import { getToken, userId } from "../atoms/user";
import { Link } from "react-router-dom";

const API_URL = "http://localhost:1337/api/auth/local";

function SignIn(props) {
	let navigate = useNavigate();

	let [logged, setLogged] = useAtom(getToken);

	let current_userId = useSetAtom(userId);

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
				// 'Authorization': `Bearer ${yourToken}`,
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
				console.log(err.message);
			});
	};

	return (
		<div className='my-0 mx-auto flex flex-col items-center justify-center w-full'>
			<h1 className='text-2xl font-bold my-4'> Se connecter </h1>
			<form className='flex flex-col' onSubmit={handleSubmit}>
				<label> username/email </label>
				<input
					className='border border-gray-400'
					type='text'
					name='identifier'
				/>
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
			<Link to='/signup'>Créer un compte</Link>
		</div>
	);
}

export default SignIn;
