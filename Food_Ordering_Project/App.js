import React from "react";
import ReactDOM from "react-dom/client";
/* 
-Header
    -Logo
    Nav Items
-Body
    -Search
    -RestraurantContainer
    ---RestaurantCard
        --Img
        --Name of Res, Star Rating, cuisines, delivery time
-Footer
    -Links
    -Social Links
    -Copyright
    -Address, Contact
 */

const Header = () => {
	return (
		<div className="header">
			<div className="logo-container">
				<img
					src="https://penji.co/wp-content/uploads/2022/08/6.-waiter.com-logo.jpg"
					className="logo"
				/>
			</div>
			<div className="nav-items">
				<ul>
					<li>Home</li>
					<li>About Us</li>
					<li>Contact</li>
					<li>Cart</li>
				</ul>
			</div>
		</div>
	);
};

const RestaurantCard = (props) => {
	const { resData } = props;
	const {
		cloudinaryImageId,
		name,
		cuisines,
		costForTwo,
		sla: { deliveryTime },
		avgRating,
	} = resData?.info;
	return (
		<div
			className="res-card"
			style={{
				backgroundColor: "#f0f0f0",
			}}
		>
			<img
				className="res-logo"
				src={
					"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/" +
					cloudinaryImageId
				}
				alt="res-logo"
			/>
			<h3>{name}</h3>
			<h4>{cuisines.join(", ")}</h4>
			<h4>{avgRating} Stars</h4>
			<h4>{costForTwo}</h4>
			<h4>{deliveryTime} minutes</h4>
		</div>
	);
};

const resList = [
	{
		info: {
			id: "393840",
			name: "Chinese Wok",
			cloudinaryImageId: "e0839ff574213e6f35b3899ebf1fc597",
			locality: "Chikka Lakshmaiah Layout",
			areaName: "Adugodi",
			costForTwo: "₹250 for two",
			cuisines: ["Chinese", "Asian", "Tibetan", "Desserts"],
			avgRating: 3.9,
			parentId: "61955",
			avgRatingString: "3.9",
			totalRatingsString: "1K+",
			sla: {
				deliveryTime: 52,
				lastMileTravel: 2.5,
				serviceability: "SERVICEABLE",
				slaString: "50-55 mins",
				lastMileTravelString: "2.5 km",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2024-06-08 02:00:00",
				opened: true,
			},
			badges: {},
			isOpen: true,
			type: "F",
			badgesV2: {
				entityBadges: {
					imageBased: {},
					textBased: {},
					textExtendedBadges: {},
				},
			},
			aggregatedDiscountInfoV3: {
				header: "ITEMS",
				subHeader: "AT ₹179",
			},
			orderabilityCommunication: {
				title: {},
				subTitle: {},
				message: {},
				customIcon: {},
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			restaurantOfferPresentationInfo: {},
		},
		analytics: {
			context: "seo-data-9119ca04-41f1-4b6e-b862-ab44d3be352b",
		},
		cta: {
			link: "https://www.swiggy.com/restaurants/chinese-wok-chikka-lakshmaiah-layout-adugodi-bangalore-393840",
			text: "RESTAURANT_MENU",
			type: "WEBLINK",
		},
		widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
	},
	{
		info: {
			id: "10576",
			name: "Pizza Hut",
			cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
			locality: "6th Block",
			areaName: "Koramangala",
			costForTwo: "₹350 for two",
			cuisines: ["Pizzas"],
			avgRating: 3.8,
			parentId: "721",
			avgRatingString: "3.8",
			totalRatingsString: "10K+",
			sla: {
				deliveryTime: 36,
				lastMileTravel: 0.8,
				serviceability: "SERVICEABLE",
				slaString: "35-40 mins",
				lastMileTravelString: "0.8 km",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2024-06-08 04:00:00",
				opened: true,
			},
			badges: {},
			isOpen: true,
			type: "F",
			badgesV2: {
				entityBadges: {
					imageBased: {},
					textBased: {},
					textExtendedBadges: {},
				},
			},
			aggregatedDiscountInfoV3: {
				header: "50% OFF",
				subHeader: "UPTO ₹100",
			},
			orderabilityCommunication: {
				title: {},
				subTitle: {},
				message: {},
				customIcon: {},
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			restaurantOfferPresentationInfo: {},
		},
		analytics: {
			context: "seo-data-9119ca04-41f1-4b6e-b862-ab44d3be352b",
		},
		cta: {
			link: "https://www.swiggy.com/restaurants/pizza-hut-6th-block-koramangala-bangalore-10576",
			text: "RESTAURANT_MENU",
			type: "WEBLINK",
		},
		widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
	},
	{
		info: {
			id: "428",
			name: "Biryani Pot ",
			cloudinaryImageId: "mdipoyzfzsa7n7igskht",
			locality: "BTM Layout",
			areaName: "BTM Layout",
			costForTwo: "₹500 for two",
			cuisines: ["Biryani"],
			avgRating: 3.9,
			parentId: "493525",
			avgRatingString: "3.9",
			totalRatingsString: "10K+",
			sla: {
				deliveryTime: 30,
				lastMileTravel: 1.9,
				serviceability: "SERVICEABLE",
				slaString: "30-35 mins",
				lastMileTravelString: "1.9 km",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2024-06-08 03:00:00",
				opened: true,
			},
			badges: {
				textExtendedBadges: [
					{
						iconId: "guiltfree/GF_Logo_android_3x",
						shortDescription: "options available",
						fontColor: "#7E808C",
					},
				],
			},
			isOpen: true,
			type: "F",
			badgesV2: {
				entityBadges: {
					imageBased: {},
					textBased: {},
					textExtendedBadges: {
						badgeObject: [
							{
								attributes: {
									description: "",
									fontColor: "#7E808C",
									iconId: "guiltfree/GF_Logo_android_3x",
									shortDescription: "options available",
								},
							},
						],
					},
				},
			},
			aggregatedDiscountInfoV3: {
				header: "20% OFF",
				subHeader: "UPTO ₹50",
			},
			orderabilityCommunication: {
				title: {},
				subTitle: {},
				message: {},
				customIcon: {},
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			restaurantOfferPresentationInfo: {},
		},
		analytics: {
			context: "seo-data-9119ca04-41f1-4b6e-b862-ab44d3be352b",
		},
		cta: {
			link: "https://www.swiggy.com/restaurants/biryani-pot-btm-layout-bangalore-428",
			text: "RESTAURANT_MENU",
			type: "WEBLINK",
		},
		widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
	},
	{
		info: {
			id: "546530",
			name: "Biryani leaf",
			cloudinaryImageId: "ucbmlf1urcjgoznpgzkm",
			locality: "1st  Stage",
			areaName: "BTM Layout",
			costForTwo: "₹300 for two",
			cuisines: ["Biryani", "Chinese", "Desserts"],
			avgRating: 3.1,
			parentId: "242332",
			avgRatingString: "3.1",
			totalRatingsString: "50+",
			sla: {
				deliveryTime: 34,
				lastMileTravel: 2.5,
				serviceability: "SERVICEABLE",
				slaString: "30-35 mins",
				lastMileTravelString: "2.5 km",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2024-06-08 06:00:00",
				opened: true,
			},
			badges: {},
			isOpen: true,
			type: "F",
			badgesV2: {
				entityBadges: {
					imageBased: {},
					textBased: {},
					textExtendedBadges: {},
				},
			},
			aggregatedDiscountInfoV3: {
				header: "₹125 OFF",
				subHeader: "ABOVE ₹249",
				discountTag: "FLAT DEAL",
				discountCalloutInfo: {
					message: "Free Delivery",
					logoCtx: {
						logo: "v1655895371/free_delivery_logo_hqipbo.png",
					},
				},
			},
			orderabilityCommunication: {
				title: {},
				subTitle: {},
				message: {},
				customIcon: {},
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			restaurantOfferPresentationInfo: {},
		},
		analytics: {
			context: "seo-data-9119ca04-41f1-4b6e-b862-ab44d3be352b",
		},
		cta: {
			link: "https://www.swiggy.com/restaurants/biryani-leaf-1st-stage-btm-layout-bangalore-546530",
			text: "RESTAURANT_MENU",
			type: "WEBLINK",
		},
		widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
	},
	{
		info: {
			id: "121603",
			name: "Kannur Food Point",
			cloudinaryImageId: "bmwn4n4bn6n1tcpc8x2h",
			locality: "BTM Layout",
			areaName: "BTM Layout",
			costForTwo: "₹300 for two",
			cuisines: ["Kerala", "Chinese"],
			avgRating: 3.9,
			parentId: "20974",
			avgRatingString: "3.9",
			totalRatingsString: "10K+",
			sla: {
				deliveryTime: 28,
				lastMileTravel: 3,
				serviceability: "SERVICEABLE",
				slaString: "25-30 mins",
				lastMileTravelString: "3.0 km",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2024-06-08 02:30:00",
				opened: true,
			},
			badges: {
				textExtendedBadges: [
					{
						iconId: "guiltfree/GF_Logo_android_3x",
						shortDescription: "options available",
						fontColor: "#7E808C",
					},
				],
			},
			isOpen: true,
			type: "F",
			badgesV2: {
				entityBadges: {
					imageBased: {},
					textBased: {},
					textExtendedBadges: {
						badgeObject: [
							{
								attributes: {
									description: "",
									fontColor: "#7E808C",
									iconId: "guiltfree/GF_Logo_android_3x",
									shortDescription: "options available",
								},
							},
						],
					},
				},
			},
			aggregatedDiscountInfoV3: {
				header: "50% OFF",
				discountTag: "FLAT DEAL",
			},
			orderabilityCommunication: {
				title: {},
				subTitle: {},
				message: {},
				customIcon: {},
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			restaurantOfferPresentationInfo: {},
		},
		analytics: {
			context: "seo-data-9119ca04-41f1-4b6e-b862-ab44d3be352b",
		},
		cta: {
			link: "https://www.swiggy.com/restaurants/kannur-food-point-btm-layout-bangalore-121603",
			text: "RESTAURANT_MENU",
			type: "WEBLINK",
		},
		widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
	},
	{
		info: {
			id: "619503",
			name: "Litti Heist",
			cloudinaryImageId: "kq5fmu174kikep8wfljh",
			locality: "1st Block",
			areaName: "Koramangala",
			costForTwo: "₹200 for two",
			cuisines: ["North Indian", "Bihari"],
			avgRating: 4.2,
			parentId: "369080",
			avgRatingString: "4.2",
			totalRatingsString: "5K+",
			sla: {
				deliveryTime: 36,
				lastMileTravel: 2.8,
				serviceability: "SERVICEABLE",
				slaString: "35-40 mins",
				lastMileTravelString: "2.8 km",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2024-06-08 03:00:00",
				opened: true,
			},
			badges: {},
			isOpen: true,
			type: "F",
			badgesV2: {
				entityBadges: {
					imageBased: {},
					textBased: {},
					textExtendedBadges: {},
				},
			},
			aggregatedDiscountInfoV3: {
				header: "60% OFF",
				subHeader: "UPTO ₹120",
				discountCalloutInfo: {
					message: "Free Delivery",
					logoCtx: {
						logo: "v1655895371/free_delivery_logo_hqipbo.png",
					},
				},
			},
			orderabilityCommunication: {
				title: {},
				subTitle: {},
				message: {},
				customIcon: {},
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			restaurantOfferPresentationInfo: {},
		},
		analytics: {
			context: "seo-data-9119ca04-41f1-4b6e-b862-ab44d3be352b",
		},
		cta: {
			link: "https://www.swiggy.com/restaurants/litti-heist-1st-block-koramangala-bangalore-619503",
			text: "RESTAURANT_MENU",
			type: "WEBLINK",
		},
		widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
	},
	{
		info: {
			id: "415042",
			name: "Royal Biryani Kitchen",
			cloudinaryImageId: "rze3ha5v1jced9951x0b",
			locality: "1st  Stage",
			areaName: "BTM Layout",
			costForTwo: "₹250 for two",
			cuisines: ["Biryani", "Chinese", "Tandoor", "Snacks", "Mughlai"],
			avgRating: 3.2,
			parentId: "171864",
			avgRatingString: "3.2",
			totalRatingsString: "500+",
			sla: {
				deliveryTime: 28,
				lastMileTravel: 2.8,
				serviceability: "SERVICEABLE",
				slaString: "25-30 mins",
				lastMileTravelString: "2.8 km",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2024-06-08 23:59:00",
				opened: true,
			},
			badges: {},
			isOpen: true,
			type: "F",
			badgesV2: {
				entityBadges: {
					imageBased: {},
					textBased: {},
					textExtendedBadges: {},
				},
			},
			aggregatedDiscountInfoV3: {
				header: "₹100 OFF",
				subHeader: "ABOVE ₹249",
				discountTag: "FLAT DEAL",
				discountCalloutInfo: {
					message: "Free Delivery",
					logoCtx: {
						logo: "v1655895371/free_delivery_logo_hqipbo.png",
					},
				},
			},
			orderabilityCommunication: {
				title: {},
				subTitle: {},
				message: {},
				customIcon: {},
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			restaurantOfferPresentationInfo: {},
		},
		analytics: {
			context: "seo-data-9119ca04-41f1-4b6e-b862-ab44d3be352b",
		},
		cta: {
			link: "https://www.swiggy.com/restaurants/royal-biryani-kitchen-1st-stage-btm-layout-bangalore-415042",
			text: "RESTAURANT_MENU",
			type: "WEBLINK",
		},
		widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
	},
	{
		info: {
			id: "496423",
			name: "Dum Biryani Hub",
			cloudinaryImageId: "dzfnv4xnrfnchnmnffyd",
			locality: "BTM Layout",
			areaName: "BTM Layout",
			costForTwo: "₹450 for two",
			cuisines: ["Biryani", "North Indian", "Chinese", "Desserts", "Beverages"],
			avgRating: 3.4,
			parentId: "297555",
			avgRatingString: "3.4",
			totalRatingsString: "1K+",
			sla: {
				deliveryTime: 34,
				lastMileTravel: 2.8,
				serviceability: "SERVICEABLE",
				slaString: "30-35 mins",
				lastMileTravelString: "2.8 km",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2024-06-08 23:59:00",
				opened: true,
			},
			badges: {},
			isOpen: true,
			type: "F",
			badgesV2: {
				entityBadges: {
					imageBased: {},
					textBased: {},
					textExtendedBadges: {},
				},
			},
			aggregatedDiscountInfoV3: {
				header: "₹125 OFF",
				subHeader: "ABOVE ₹299",
				discountTag: "FLAT DEAL",
				discountCalloutInfo: {
					message: "Free Delivery",
					logoCtx: {
						logo: "v1655895371/free_delivery_logo_hqipbo.png",
					},
				},
			},
			orderabilityCommunication: {
				title: {},
				subTitle: {},
				message: {},
				customIcon: {},
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			restaurantOfferPresentationInfo: {},
		},
		analytics: {
			context: "seo-data-9119ca04-41f1-4b6e-b862-ab44d3be352b",
		},
		cta: {
			link: "https://www.swiggy.com/restaurants/dum-biryani-hub-btm-layout-bangalore-496423",
			text: "RESTAURANT_MENU",
			type: "WEBLINK",
		},
		widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
	},
	{
		info: {
			id: "240148",
			name: "Gudbud",
			cloudinaryImageId: "ezkvppoifkkmfebdqydh",
			locality: "Ejipura",
			areaName: "Koramangala",
			costForTwo: "₹300 for two",
			cuisines: ["Ice Cream", "Desserts"],
			avgRating: 4.5,
			parentId: "11110",
			avgRatingString: "4.5",
			totalRatingsString: "5K+",
			sla: {
				deliveryTime: 28,
				lastMileTravel: 0.9,
				serviceability: "SERVICEABLE",
				slaString: "25-30 mins",
				lastMileTravelString: "0.9 km",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2024-06-08 04:00:00",
				opened: true,
			},
			badges: {
				textExtendedBadges: [
					{
						iconId: "Ratnesh_Badges/test2.png",
						shortDescription: "Perfect ice cream delivery",
						fontColor: "#7E808C",
					},
				],
			},
			isOpen: true,
			aggregatedDiscountInfoV2: {},
			type: "F",
			badgesV2: {
				entityBadges: {
					imageBased: {},
					textBased: {},
					textExtendedBadges: {
						badgeObject: [
							{
								attributes: {
									description: "",
									fontColor: "#7E808C",
									iconId: "Ratnesh_Badges/test2.png",
									shortDescription: "Perfect ice cream delivery",
								},
							},
						],
					},
				},
			},
			orderabilityCommunication: {
				title: {},
				subTitle: {},
				message: {},
				customIcon: {},
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			restaurantOfferPresentationInfo: {},
		},
		analytics: {
			context: "seo-data-9119ca04-41f1-4b6e-b862-ab44d3be352b",
		},
		cta: {
			link: "https://www.swiggy.com/restaurants/gudbud-ejipura-koramangala-bangalore-240148",
			text: "RESTAURANT_MENU",
			type: "WEBLINK",
		},
		widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
	},
];
const Body = () => {
	return (
		<div className="body">
			<div className="search">Search</div>
			<div className="res-container">
				{resList.map((res) => {
					return <RestaurantCard key={res.info.id} resData={res} />;
				})}
			</div>
		</div>
	);
};

const AppLayout = () => {
	return (
		<div className="app">
			<Header />
			<Body />
		</div>
	);
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
