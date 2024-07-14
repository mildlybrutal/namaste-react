import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
	const dispatch = useDispatch();
	const handleAddItem = (item) => {
		dispatch(addItem(item));
	};

	return (
		<div className="text-center">
			<div className="space-y-4">
				{items.map((item) => {
					const itemInfo = item.card?.info || item;
					return (
						<div
							key={itemInfo.id}
							className="p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex justify-between items-center"
						>
							<div className="w-8/12">
								<div className="mb-2">
									<span className="text-lg font-semibold text-gray-800">
										{itemInfo.name}
									</span>
									<span className="ml-2 text-green-600 font-medium">
										₹
										{itemInfo.price
											? itemInfo.price / 100
											: itemInfo.defaultPrice / 100}
									</span>
								</div>
								<p className="text-sm text-gray-600">{itemInfo.description}</p>
							</div>
							<div className="w-4/12 relative">
								{itemInfo.imageId && (
									<img
										src={CDN_URL + itemInfo.imageId}
										className="w-full h-24 object-cover rounded-lg"
										alt={itemInfo.name}
									/>
								)}
								<button
									className="absolute bottom-0 right-0 px-3 py-1 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition-colors duration-300"
									onClick={() => handleAddItem(itemInfo)}
								>
									Add +
								</button>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default ItemList;
