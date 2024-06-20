import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
const RestaurantMenu = () => {
	const [resInfo, setResInfo] = useState(null);
	const { resId } = useParams();
	useEffect(() => {
		fetchMenu();
	}, []);

	const fetchMenu = async () => {
		const data = await fetch(MENU_API + resId);
		const json = await data.json();

		console.log(json);
		setResInfo(json.data);
	};
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
