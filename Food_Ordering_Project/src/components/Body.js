import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resList from "../utils/mockData";
const Body = () => {
	//Local State Variable - Super Powerful Variable -> setListofRest = Update the list
	let [listOfRestaurants, setListOfRestaraunt] = useState(resList);
	let [searchInput, setSearchInput] = useState("");
	return (
		<div className="body">
			<div className="search">
				<input
					type="search"
					placeholder="Search your restaraunt"
					className="search-bar"
					value={searchInput}
					onChange={(e) => {
						setSearchInput(e.target.value);
					}}
				></input>
				<button
					className="search-btn"
					onClick={() => {
						const searchList = resList.filter((res) =>
							res.info.name.toLowerCase().includes(searchInput.toLowerCase())
						);
						setListOfRestaraunt(searchList);
					}}
				>
					Search
				</button>
			</div>
			<div className="filter">
				<button
					className="filter-btn"
					onClick={() => {
						const filteredList = listOfRestaurants.filter(
							(res) => res.info.avgRating > 4
						);
						setListOfRestaraunt(filteredList);
						console.log(listOfRestaurants);
					}}
				>
					Top Rated Restaurants
				</button>
			</div>
			<div className="res-container">
				{listOfRestaurants.map((res) => {
					return <RestaurantCard key={res.info.id} resData={res} />;
				})}
			</div>
		</div>
	);
};

export default Body;
