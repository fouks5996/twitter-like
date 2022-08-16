import { useAtomValue } from "jotai";
import React from "react";
import { useState } from "react";
import { userName, userEmail } from "../atoms/user";
import SinglePost from "../components/SinglePost";
import Toggle from "../components/Toggle";
import UpdataUser from "../components/UpdataUser";
import useFetch from "../hooks/useFetch";

const API_URL = "http://localhost:1337/api/users/me?populate=posts";

function UserProfile() {
	const [data] = useFetch(API_URL);
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
							<p>
								Nom :
								{newuserName === undefined
									? ` ${data.name}`
									: ` ${newuserName}`}
							</p>
							<p>
								Email :
								{newUserEmail === undefined
									? ` ${data.email}`
									: ` ${newUserEmail}`}
							</p>
							<div className='mt-4'>
								<h1 className='text-md font-semibold'> Tout vos posts :</h1>
								<div>
									{data.posts
										.sort((a, b) => a.createdAt - b.createdAt)
										.map((post) => (
											<SinglePost post={post} show={true} />
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
