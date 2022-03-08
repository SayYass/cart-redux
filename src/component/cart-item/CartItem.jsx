import { Delete, Favorite, PlusOne } from "@material-ui/icons";
import "./cartItem.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement , deleteProduct} from "../../actions";

const CartItem = () => {
  const cart = useSelector((state) => state.cartReducer.cart);
  const dispatch = useDispatch();

  return cart.map((item) => (
    <div className="cart-item">
      <div className="cart-item-image">
        <img src={item.img} alt="product" />
      </div>

      <div className="cart-item-details">
        <h3>{item.name}</h3>
        <p>Color {item.color}</p>
        <p>Size: {item.size}</p>
        <div className="button">
          <button onClick={() => dispatch(deleteProduct(item.id))}>
            <Delete /> Remove Item
          </button>

          <button>
            <Favorite /> Add to Wishlist
          </button>
        </div>
      </div>

      <div className="cart-item-price">
        <div className="qty">
          <button className="button-qty" onClick={() => dispatch(decrement(item.id)) }> - </button>
          <span className="qty"> {item.qty} </span>
          <button className="button-qty" onClick={() => dispatch(increment(item.id))}> + </button>
        </div>
        <p>${item.price}</p>
      </div>
    </div>
  ));
};

export default CartItem;
