import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearItem } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearItem());
  };

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-xl font-bold">Cart</h1>
      <button
        className="text-white bg-black m-2 p-2 rounded-md"
        onClick={handleClearCart}
      >
        Clear Cart
      </button>
      {cartItems.length === 0 && (
        <h1 className="text-xl font-extrabold">
          Cart is empty! Please Add the item
        </h1>
      )}
      <div className="w-8/12 m-auto">
        <ItemList items={cartItems}></ItemList>
      </div>
    </div>
  );
};
export default Cart;
