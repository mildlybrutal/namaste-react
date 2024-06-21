import { useEffect, useState } from "react";

const OnlineStatus = () => {
	const [onlineStatus, setOnlineStatus] = useState(true);
	//check if online
	useEffect(() => {
		window.addEventListener("offline", () => {
			setOnlineStatus(false);
		});
		window.addEventListener("online", () => {
			setOnlineStatus(true);
		});
	}, []);

	//return status boolean value
	return onlineStatus;
};

export default OnlineStatus;