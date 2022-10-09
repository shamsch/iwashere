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

const API = "http://localhost:8080";

function App() {
	const handleName = (name) => {
		console.log(name);
	};

	const [allNames, setAllNames] = useState([]);

	useEffect(() => {
		fetch(`${API}/api`)
			.then((res) => res.json())
			.then((data) => {
				//only add the last 5 names
				setAllNames(data.slice(-5));
			});
	}, []);

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
