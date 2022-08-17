import { useSetAtom } from "jotai";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";
import { userName, userEmail } from "../atoms/user";

const useFetch = (url, recucerValue) => {
	const [data, setData] = useState(null);
	const token = Cookies.get("token");
	const setUserName = useSetAtom(userName);
	const setUserEmail = useSetAtom(userEmail);

	useEffect(() => {
		fetch(url, {
			method: "GET",
			headers: { Authorization: `Bearer ${token}` },
		})
			.then((response) => response.json())
			.then((data) => {
				setData(data);
				setUserName(data.username);
				setUserEmail(data.email);
			});
	}, [url, token, recucerValue]);

	return [data];
};

export default useFetch;
