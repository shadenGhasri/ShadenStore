import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { delCart } from "../redux/action";

const Cart = () => {
  const state = useSelector((state) => state.addItem);
  const dispatch = useDispatch();

  const cartItems = (cartItem) => {
    return (
      <div className="px-4 my-5 rounded-3">
        <div className="container"></div>
        <button className="btn"></button>
        <div className="row">
          <div className="col-md-4">
            <h3></h3>
            <p></p>
          </div>
        </div>
      </div>
    );
  };

  return <> {state && state.map(cartItems)}</>;
};
export default Cart;
