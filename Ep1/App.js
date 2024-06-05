import React from "react";
import ReactDom from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
	React.createElement("div", { id: "child" }, [
		React.createElement("h1", {}, "I am h1"),
		React.createElement("h2", {}, "I am h2"),
	]),
	React.createElement("div", { id: "child2" }, [
		React.createElement("h1", {}, "I am h1"),
		React.createElement("h2", {}, "I am h2"),
	]),
]);
const heading = React.createElement(
	"h1",
	{ id: "heading", xyz: "lol" },
	"Hello World from React!"
);

const root = ReactDOM.createRoot(document.getElementById("root")); // Object
root.render(parent);
