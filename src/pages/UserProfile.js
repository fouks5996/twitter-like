import { useAtomValue } from "jotai";
import React, { useReducer } from "react";
import { useState } from "react";
import { userName, userEmail } from "../atoms/user";
import SinglePost from "../components/posts/SinglePost";
import Toggle from "../components/Buttons/Toggle";
import UpdataUser from "../components/user/UpdataUser";
import useFetch from "../hooks/useFetch";

function UserProfile() {
	// Variables
	const [recucerValue, forceUpdate] = useReducer((x) => x + 1, 0);
	const API_URL = "http://localhost:1337/api/users/me?populate=posts";
	const [data] = useFetch(API_URL, recucerValue);
	const [toggle, setToggle] = useState(false);
	const newuserName = useAtomValue(userName);
	const newUserEmail = useAtomValue(userEmail);

	return (
		<>
			{data && (
				<div className='p-10'>
					<h1 className='font-bold text-2xl'>
						{newuserName === undefined
							? `Hello ${data.name}`
							: `Hello ${newuserName}`}
					</h1>
					<Toggle
						toggle={toggle}
						setToggle={setToggle}
						tabName1='Informations'
						tabName2='Modifier mon profil'
					/>

					{!toggle ? (
						<div className='my-6'>
							<p className='flex items-center gap-1'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='h-5 w-5'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'
									strokeWidth='2'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
									/>
								</svg>
								{newuserName === undefined
									? ` ${data.name}`
									: ` ${newuserName}`}
							</p>
							<p className='flex items-center gap-1 mt-3'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='h-5 w-5'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'
									strokeWidth='2'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207'
									/>
								</svg>
								{newUserEmail === undefined
									? ` ${data.email}`
									: ` ${newUserEmail}`}
							</p>
							<div className='mt-10'>
								<h1 className='text-md font-semibold'>
									{" "}
									{data.posts.length === 0
										? "Vous n'avez pas encore de post"
										: "Tout vos posts :"}{" "}
								</h1>
								<div>
									{data.posts
										.sort((a, b) => a.createdAt - b.createdAt)
										.map((post) => (
											<SinglePost
												post={post}
												show={true}
												forceUpdate={forceUpdate}
											/>
										))}
								</div>
							</div>
						</div>
					) : (
						<div>
							<UpdataUser data={data} />
						</div>
					)}
				</div>
			)}
		</>
	);
}

export default UserProfile;
