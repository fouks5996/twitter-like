import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";

function useFetchPosts(url) {
	const [data, setData] = useState(null);
	const token = Cookies.get("token");

	useEffect(() => {
		fetch(url, {
			method: "GET",
			headers: { Authorization: `Bearer ${token}` },
		})
			.then((response) => response.json())
			.then((data) => {
				setData(data);
			});
	}, [token, url]);

	return [data];
}

export default useFetchPosts;
