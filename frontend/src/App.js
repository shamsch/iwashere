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
]

function App() {
  const handleName = (name) => {
    console.log(name);
  };

	return (
		<div className='App'>
			<AddYourName handleName={handleName} />
      		<ListOfNames allNames={NAMES} />
		</div>
	);
}

export default App;
