import RestaurantCard, { withVegLabel } from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
	const [listOfRestaurants, setListOfRestaurants] = useState([]);
	const [filteredRestaurants, setFilteredRestaurants] = useState([]);
	const [searchInput, setSearchInput] = useState("");

	const RestaurantCardVeg = withVegLabel(RestaurantCard);

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		try {
			const response = await fetch(
				"https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1163192&lng=79.0705079&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
			);
			const json = await response.json();

			const restaurantCards =
				json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
					?.restaurants || [];
			setListOfRestaurants(restaurantCards);
			setFilteredRestaurants(restaurantCards);
		} catch (error) {
			console.error("Error fetching restaurant data:", error);
		}
	};

	const onlineStatus = useOnlineStatus();
	if (onlineStatus === false) {
		return (
			<div className="flex items-center justify-center h-screen bg-gray-100">
				<h1 className="text-2xl font-bold text-gray-800">
					Looks like you're offline. Please check your internet connection.
				</h1>
			</div>
		);
	}

	if (listOfRestaurants.length === 0) {
		return <Shimmer />;
	}

	const handleSearch = () => {
		if (searchInput.trim() === "") {
			setListOfRestaurants(filteredRestaurants);
		} else {
			const filtered = filteredRestaurants.filter((res) =>
				res.info.name.toLowerCase().includes(searchInput.toLowerCase())
			);
			setListOfRestaurants(filtered);
		}
	};

	const handleTopRated = () => {
		const topRated = filteredRestaurants.filter(
			(res) => res.info.avgRating > 4
		);
		setListOfRestaurants(topRated);
	};

	return (
		<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
			<div className="mb-8">
				<div className="flex items-center justify-center mb-4">
					<input
						type="text"
						placeholder="Search your restaurant"
						className="w-full max-w-md px-4 py-2 rounded-l-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
						value={searchInput}
						onChange={(e) => setSearchInput(e.target.value)}
					/>
					<button
						className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-r-lg hover:bg-blue-600 transition duration-300 ease-in-out"
						onClick={handleSearch}
					>
						Search
					</button>
				</div>
				<div className="flex justify-center">
					<button
						className="px-6 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition duration-300 ease-in-out"
						onClick={handleTopRated}
					>
						Top Rated Restaurants
					</button>
				</div>
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
				{listOfRestaurants.map((res) => (
					<Link key={res.info.id} to={"/restaurants/" + res.info.id}>
						{res.info.veg ? (
							<RestaurantCardVeg resData={res} />
						) : (
							<RestaurantCard resData={res} />
						)}
					</Link>
				))}
			</div>
		</div>
	);
};

export default Body;
