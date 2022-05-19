import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { delCart } from "../redux/action";
import "./cart.css";

const Cart = () => {
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();

  const cartItems = (cartItem) => {
    return (
      <div className="d-flex justify-content-center my-5">
        <div className="shadow-sm boxCart px-2 row">
          <div className=""></div>
          <button className="btn"></button>
          <div className="row">
            <div className="col-md-4">
              <h3></h3>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return <>{state && state.map(cartItems)}</>;
};
export default Cart;
