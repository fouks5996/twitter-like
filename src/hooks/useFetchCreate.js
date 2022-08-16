import React, { useEffect, useState } from "react";

function useFetchCreate(url) {
	const [data, setData] = useState(null);

	useEffect(() => {
		fetch(url, {
			method: "GET",
		})
			.then((response) => response.json())
			.then((data) => {
				setData(data);
			});
	}, [url]);

	return [data];
}

export default useFetchCreate;
