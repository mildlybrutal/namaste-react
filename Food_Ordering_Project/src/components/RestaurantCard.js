import { CDN_URL } from "../utils/constants";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
const RestaurantCard = ({ resData }) => {
	const { cloudinaryImageId, name, cuisines, costForTwo, avgRating } =
		resData?.info;
	const { loggedInUser } = useContext(UserContext);
	return (
		<div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
			<img
				className="w-full h-48 object-cover"
				src={CDN_URL + cloudinaryImageId}
				alt={name}
			/>
			<div className="p-4">
				<h3 className="font-bold text-xl mb-2 text-gray-800">{name}</h3>
				<p className="text-sm text-gray-600 mb-2">{cuisines.join(", ")}</p>
				<div className="flex justify-between items-center">
					<span
						className={`px-2 py-1 rounded-full text-sm font-semibold ${
							avgRating >= 4
								? "bg-green-500 text-white"
								: "bg-orange-500 text-white"
						}`}
					>
						{avgRating} ★
					</span>
					<span className="text-sm font-medium text-gray-700">
						{costForTwo}
					</span>
					<span>{loggedInUser}</span>
				</div>
			</div>
		</div>
	);
};

const withVegLabel = (RestaurantCard) => {
	return (props) => (
		<div className="relative">
			<div className="absolute top-2 left-2 bg-green-600 text-white px-2 py-1 rounded-full text-xs font-semibold z-10">
				Pure Veg
			</div>
			<RestaurantCard {...props} />
		</div>
	);
};

export default RestaurantCard;
export { withVegLabel };
