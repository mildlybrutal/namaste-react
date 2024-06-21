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
		<div className="menu">
			<h1 id="name">{name}</h1>
			<div className="menu-header">
				<h2>{"Outlet: " + areaName}</h2>
				<p>
					{cuisines.join(",")} - {costForTwo / 100} {"for two"}
				</p>
			</div>

			<h2 id="menu-title">Menu</h2>
			<div className="dishes-container">
				<ul className="dishes">
					{itemCards.map((item) => (
						<li key={item.card.info.id}>
							<div className="dish-name">{item.card.info.name}</div>
							<div className="dish-price">
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
