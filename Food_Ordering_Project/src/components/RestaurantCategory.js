import React from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
	const handleClick = () => {
		setShowIndex();
	};

	return (
		<div className="w-full max-w-3xl mx-auto my-6">
			<div className="bg-white rounded-xl shadow-md overflow-hidden">
				<div
					className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-50 transition-colors duration-300"
					onClick={handleClick}
				>
					<span className="font-bold text-xl text-gray-800">
						{data.title}{" "}
						<span className="text-green-600">({data.itemCards.length})</span>
					</span>
					<span className="text-2xl">{showItems ? "🔼" : "🔽"}</span>
				</div>
				{showItems && <ItemList items={data.itemCards} />}
			</div>
		</div>
	);
};

export default RestaurantCategory;
