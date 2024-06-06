import React from "react";
import ReactDom from "react-dom/client";
import image from "./imageSample.jpg";
const root = ReactDOM.createRoot(document.getElementById("root"));
// JSX => Babel transples into React.createElement()

const Title = () => (
	<h1 id="heading" className="lol" tabIndex="5">
		Title
	</h1>
);

// React functional component
const HeadingComponent = () => (
	<div id="container">
		{Title()}
		<Title></Title>
		<Title />
		<h1 className="xd">Hello lol!</h1>
	</div>
);
//{data} => curly brases prevents cross side scripting attack
// Component Composition => Reusability
root.render(<HeadingComponent />);
