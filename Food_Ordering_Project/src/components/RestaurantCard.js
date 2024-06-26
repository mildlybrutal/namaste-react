import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
	const { resData } = props;
	const {
		cloudinaryImageId,
		name,
		cuisines,
		costForTwo,
		//sla: { deliveryTime },
		avgRating,
	} = resData?.info;
	return (
		<div className="m-4 p-4 w-[250px] rounded-lg shadow-lg bg-gray-100 hover:bg-gray-200">
			<img
				className="rounded-lg"
				src={CDN_URL + cloudinaryImageId}
				alt="res-logo"
			/>
			<h3 className="font-bold py-4 text-lg">{name}</h3>
			<h4>{cuisines.join(", ")}</h4>
			<h4>{avgRating} Stars</h4>
			<h4>{costForTwo}</h4>
			{/* <h4>{deliveryTime} minutes</h4> */}
		</div>
	);
};

// Higher order component
//Input - RestaurantCard  ==> Output - RestaurantCardPromoted

const withVegLabel = (RestaurantCard) => {
	return (props) => {
		return (
			<div>
				<label className="absolute bg-green-800 text-white m-2 p-2 rounded-lg">Veg</label>
				<RestaurantCard {...props} />
			</div>
		);
	};
};

export default RestaurantCard;
export { withVegLabel };
