import { useEffect, useState } from "react";
import AddYourName from "./components/AddYourName";
import ListOfNames from "./components/ListOfNames";

const NAMES = [
	{
		name: "John Doe",
	},
	{
		name: "Jane Doe",
	},
	{
		name: "John Smith",
	},
];

const API = "http://13.53.126.216:4000";

function App() {
	const [allNames, setAllNames] = useState([]);
	const [refetch, setRefetch] = useState(false);

	useEffect(() => {
		fetch(`${API}/api`)
			.then((res) => res.json())
			.then((data) => {
				//only add the last 5 names
				setAllNames(data.slice(-5));
			});
	}, [refetch]);

	const handleName = (name) => {
		fetch(`${API}/api`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(name),
		}).then(() => {
			setRefetch(!refetch);
		});
	};

	return (
		<div className='App'>
			<AddYourName handleName={handleName} />
			{allNames.length > 0 ? (
				<ListOfNames allNames={allNames} />
			) : (
				<ListOfNames allNames={NAMES} />
			)}
		</div>
	);
}

export default App;
