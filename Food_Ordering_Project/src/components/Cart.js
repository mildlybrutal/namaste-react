import { useSelector } from "react-redux";
import ItemList from "./ItemList";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";
const Cart = () => {
  //Right portion of the store-> Optimizes the Performance
  //selecting the portion of the store
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center m-4 p-4 ">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto">
        <button
          className="p-2 m-2 bg-black text-white rounded-lg"
          onClick={handleClearCart}
        >
          Clear cart
        </button>
        {cartItems && cartItems.length > 0 ? (
          <ItemList items={cartItems} />
        ) : (
          <p>lol! you need to add something here</p>
        )}
      </div>
    </div>
  );
};

export default Cart;
