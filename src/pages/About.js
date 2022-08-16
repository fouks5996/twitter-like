import Cookies from "js-cookie";
import React from "react";
import { useState, useEffect } from "react";

const API_URL = "http://localhost:1337/api/users/me";

function About() {
	const [userData, setUserData] = useState(null);
	const token = Cookies.get("token");

	useEffect(() => {
		fetch(API_URL, {
			method: "GET",
			headers: { Authorization: `Bearer ${token}` },
		})
			.then((response) => response.json())
			.then((data) => setUserData(data));
	}, []);

	console.log(userData);

	return (
		<div className='my-0 mt-10 mx-auto flex flex-col items-center justify-center w-full'>
			{" "}
			<h1 className='text-3xl font-bold underline'>Hello About!</h1>
			{/* <button onClick={fetchData}>ee</button> */}
		</div>
	);
}

export default About;
