import AddYourName from "./components/AddYourName";
import ListOfNames from "./components/ListOfNames";

const NAMES = ["John", "Jane", "Joe", "Jill"];

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
