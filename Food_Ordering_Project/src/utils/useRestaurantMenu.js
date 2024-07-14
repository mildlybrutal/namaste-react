import { useEffect,useState } from "react";
import { MENU_API } from "../utils/constants";
const RestaurantMenu = (resId) => {
	const [resInfo, setResInfo] = useState(null);
	//fetch data from api
	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		const data = await fetch(MENU_API + resId);
		const json = await data.json();
		//console.log("original json: ",json);
		setResInfo(json.data);
	};
	return resInfo;
};

export default RestaurantMenu;
