import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
	const { resId } = useParams();
	const resInfo = useRestaurantMenu(resId);
	const [showIndex, setShowIndex] = useState(null);

	if (!resInfo) {
		return <Shimmer />;
	}

	const { name, areaName, cuisines, costForTwo } =
		resInfo?.cards[2]?.card?.card?.info || {};

	const categories =
		resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
			(card) =>
				card.card?.["card"]?.["@type"] ===
				"type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
		) || [];

	const toggleCategory = (index) => {
		if (showIndex === index) {
			setShowIndex(null); // Close the category if it's already open
		} else {
			setShowIndex(index); // Open the clicked category
		}
	};

	return (
		<div className="bg-gray-100 min-h-screen py-8">
			<div className="max-w-4xl mx-auto px-4">
				<div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
					<div className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white p-6">
						<h1 id="name" className="font-bold text-3xl mb-2">
							{name}
						</h1>
						<div className="text-lg">
							<h2 className="font-medium">{"Outlet: " + areaName}</h2>
							<p className="text-gray-200">
								{cuisines?.join(", ")} - ₹{costForTwo / 100} for two
							</p>
						</div>
					</div>
				</div>
				{categories.map((category, index) => (
					<RestaurantCategory
						key={category?.card?.card?.title}
						data={category?.card?.card}
						showItems={index === showIndex}
						setShowIndex={() => toggleCategory(index)}
					/>
				))}
			</div>
		</div>
	);
};

export default RestaurantMenu;
