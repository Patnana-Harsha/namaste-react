import { useSelector } from "react-redux";
import ItemList from "./ItemList";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    //while using useSelector make sure that u r subscring to the right portion of the store.

    const cartItems = useSelector((store) => store.cart.items);

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
     }

return(
    <div className="text-center m-4 p-5">
        <h1 className="text-2xl font-bold">CART</h1>
        <div className="w-6/12 m-auto">
           <ItemList items={cartItems} />
        </div>
        <button className="m-2 p-2 text-white bg-black"
        onClick={handleClearCart}
        
        >
            Clear Cart
        </button>
    </div>
   
    

);

};
export default Cart;