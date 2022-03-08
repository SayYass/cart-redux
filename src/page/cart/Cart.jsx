
import { useSelector } from "react-redux";
import CartItem from "../../component/cart-item/CartItem";
import Dropdowns from "../../component/dropdown/Dropdown";
import Total from "../../component/total/Total";
import "./cart.css";

const Cart = () => {
  const cart = useSelector((state) => state.cartReducer.cart);
  return (
    <div className="cart">
      <div className="cart-title">
        <h1>Shopping cart</h1>
      </div>

      <div className="cart-container">
        
        <div className="cart-item-container">
        <div className="title">
        <h5>Cart ({cart.length} Item)</h5>
          </div>
          <CartItem />
        </div>

        <div className="total-diskon">
          <div className="cart-total-container">
            <Total />
          </div>
            <Dropdowns/>
          <div className="cart-diskon-container"></div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
