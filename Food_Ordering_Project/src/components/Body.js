import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";

const Body = () => {
	// Local State Variable - Super Powerful Variable -> setListofRest = Update the list
	const [listOfRestaurants, setListOfRestaurants] = useState([]);
	const [filteredRestaurants, setFilteredRestaurants] = useState([]);
	const [searchInput, setSearchInput] = useState("");

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		try {
			const response = await fetch(
				"https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1163192&lng=79.0705079&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
			);
			const json = await response.json();

			// Optional Chaining
			const restaurantCards =
				json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
					?.restaurants;
			setListOfRestaurants(restaurantCards);
		} catch (error) {
			console.error(error);
		}
	};

	// Conditional Rendering
	if (listOfRestaurants.length === 0) {
		return <Shimmer />;
	}

	const handleSearch = () => {
		if (searchInput.trim() === "") {
			setListOfRestaurants(filteredRestaurants);
		} else {
			const filteredRestaurants = listOfRestaurants.filter((res) =>
				res.info.name.toLowerCase().includes(searchInput.toLowerCase())
			);
			setListOfRestaurants(filteredRestaurants);
		}
	};

	return listOfRestaurants.length === 0 ? (
		<Shimmer />
	) : (
		<div className="body">
			<div className="search">
				<input
					type="text"
					placeholder="Search your restaurant"
					className="search-bar"
					value={searchInput}
					onChange={(e) => {
						setSearchInput(e.target.value);
					}}
				></input>
				<button className="search-btn" onClick={handleSearch}>
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
						setListOfRestaurants(filteredList);
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
