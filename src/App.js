import Accordion from "./accordion";
import "./App.css";

function App() {
	let items = [
		{
			id: 1,
			title: "title 1",
			content: "content 1",
		},
		{
			id: 2,
			title: "title 2",
			content: "content 2",
		},
		{
			id: 1,
			title: "title 3",
			content: "content 3",
		},
	];

	return (
		<div className="App">
			<Accordion items={items}/>
		</div>
	);
}

export default App;
