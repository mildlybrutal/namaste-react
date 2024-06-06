import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./images/logo.png";
import user from "./images/user.png";
import "./style.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
/* const heading = React.createElement("div", { class: "title" }, [
	React.createElement("h1", {}, "This is a h1 tag"),
	React.createElement("h2", {}, "This is a h2 tag"),
	React.createElement("h3", {}, "This is a h3 tag"),
]);


const root2 = ReactDOM.createRoot(document.getElementById("root2"));
const titleComponent = (
	<div className="title">
		<h1>This is a h1 tag</h1>
		<h2>This is a h2 tag</h2>
		<h3>This is a h3 tag</h3>
	</div>
);

const JsxHeading = () => (
	<div className="title">
		{titleComponent}
		<h1>This is a h1 tag</h1>
		<h2>This is a h2 tag</h2>
		<h3>This is a h3 tag</h3>
	</div>
); */

const HeadingComponent = () => (
	<div class="container">
        <div id = "logo"><img src={logo} alt="logo" id = "logo"></img></div>
		<div className = "search"><input type = "text"/></div>
		<div id ="user "> <img src={user} alt="user-img" id = "user"></img></div>
		
	</div>
);

root.render(<HeadingComponent />);
