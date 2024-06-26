import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
const RestaurantMenu = () => {
	const { resId } = useParams();
	const resInfo = useRestaurantMenu(resId);
	if (resInfo === null) {
		return <Shimmer />;
	}
	const { name, areaName, cuisines, costForTwo } =
		resInfo?.cards[2]?.card?.card?.info || {};

	const itemCards =
		resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.find(
			(card) =>
				card.card?.card?.["@type"] ===
				"type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
		).card?.card?.itemCards;

	console.log(itemCards);
	return (
		<div className="m-10 p-6">
			<div className="bg-zinc-300">
				<h1 id="name" className="font-semibold text-2xl m-4 p-4">
					{name}
				</h1>
				<div className="text-xl font-medium m-4 p-4">
					<h2>{"Outlet: " + areaName}</h2>
					<p>
						{cuisines.join(",")} - {costForTwo / 100} {"for two"}
					</p>
				</div>
			</div>

			<h2  className="font-bold text-3xl text-center m-4 p-4 mb - 4">Menu</h2>
			<div className="m-4 p-4 text-lg ">
				<ul className="dishes space-y-2">
					{itemCards.map((item) => (
						<li key={item.card.info.id}  className="flex justify-between items-center border-b border-gray-200 pb-2">
							<div className="font-medium">{item.card.info.name}</div>
							<div className="font-semibold">
								{item.card.info.price / 100 ||
									item.card.info.defaultPrice / 100}
								{"₹"}
							</div>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default RestaurantMenu;
