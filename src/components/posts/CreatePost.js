import { useAtomValue } from "jotai";
import { userId } from "../../atoms/user";

function CreatePost({ forceUpdate }) {
	let API_URL = "http://localhost:1337/api/posts";
	let current_userId = useAtomValue(userId);

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
				e.target.description.value = "";

				forceUpdate();

				window.scrollTo({
					top: 0,
					behavior: "smooth",
				});
			});
	};

	return (
		<form
			className='flex gap-4 items-center w-full px-9 mt-3 sticky top-0 py-4 z-10 border-b border-gray-400 bg-[#f2f9ff]'
			onSubmit={handleSubmit}>
			<input
				placeholder='Ecrivez ...'
				className='border pl-8 border-gray-200 rounded-[100px] w-full h-16  '
				type='text'
				onClick={(e) => (e.target.value = "")}
				name='description'
			/>
			<input
				className='bg-blue-twiter text-white text-sm font-bold rounded-3xl py-2 px-4 cursor-pointer'
				type='submit'
				value='Postez'
			/>
		</form>
	);
}

export default CreatePost;
