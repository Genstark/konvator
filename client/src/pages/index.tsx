import { useEffect, useState } from "react";
interface ApiResponse {
	name: string;
}
export default function Home() {
	const [data, setData] = useState<ApiResponse>();
	useEffect(() => {
		fetch("/api/hello")
			.then((response) => response.json())
			.then((data) => {
				console.log("API Response:", data);
				setData(data);
			})
			.catch((error) => {
				console.error("Error fetching API:", error);
			});
	}, []);
	return (
		<div>
			<h1>Hello, World!</h1>
			<p>This is Home page of our application.</p>
			{data && (
				<div>
					<h2>API Response: {data.name}</h2>
				</div>
			)}
		</div>
	);
}
