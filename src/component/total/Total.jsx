import "./total.css";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getTotal } from "../../actions";
import { useEffect } from "react";
const Total = () => {
  const cart = useSelector((state) => state.cartReducer.cart);
  const { totalResult } = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTotal());
  }, [dispatch, cart]);
  return (
    <div className="total">
      <div className="title">
        <h4>The total ammount of</h4>
      </div>

      <div className="total-detail">
        <div className="detail">
          <p>Temporary ammount</p>
          <p>${totalResult}</p>
        </div>
        <div className="detail">
          <p>Shipping</p>
          <p>Free</p>
        </div>
        <hr />
        <div className="detail">
          <p>Total</p>
          <p>${totalResult}</p>
        </div>
        <Button className="container"> GO TO CHECKOUT </Button>
      </div>
    </div>
  );
};

export default Total;
