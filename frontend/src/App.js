import AddYourName from "./components/AddYourName";

function App() {
  const handleName = (name) => {
    console.log(name);
  };

	return (
		<div className='App'>
			<AddYourName handleName={handleName} />
		</div>
	);
}

export default App;
