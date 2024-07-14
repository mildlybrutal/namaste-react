# namaste-react
All Assignments and Notesss


// Food Ordering app
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


 <h2 className="font-bold text-3xl text-center m-4 p-4 mb - 4">Menu</h2>
			<div className="m-4 p-4 text-lg ">
				<ul className="dishes space-y-2">
					{itemCards.map((item) => (
						<li
							key={item.card.info.id}
							className="flex justify-between items-center border-b border-gray-200 pb-2"
						>
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