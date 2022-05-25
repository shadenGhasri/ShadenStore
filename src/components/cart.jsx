import "./cart.css";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { delCart } from "../redux/action/index";


const Cart = () => {
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();

  const handleClose = (item) => {
    dispatch(delCart(item));
  };

  const cartItems = (cartItem) => {
    return (
      <div className="d-flex justify-content-center my-5">
        <div className="shadow-sm boxCart px-2 py-5">
          <button
            className="btn-close float-end"
            aria-label="Close"
            onClick={() => handleClose(cartItem)}
          ></button>
          <div className="row justify-content-center">
            <div className="col-md-4">
              <img
                src={cartItem.image}
                alt={cartItem.title}
                height="200px"
                width="180px"
              />
            </div>
            <div className="col-md-4">
              <h3>{cartItem.title}</h3>
              <p className="lead fw-bold">${cartItem.price}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const button = ()=>{
    return(
      <div className="container">
        <div className="row">
          <NavLink to = "/checkout" className="btn btn-outline-dark mb-5 w-25 mx-auto">Proceed To Checkout</NavLink>
        </div>
      </div>
    )
  }

  return (
    <>
      {state.length !== 0 ? (
        state.map(cartItems)
      ) : (
        <div className="d-flex justify-content-center my-5">
          <div className="shadow-sm boxCart px-2 py-5">
            <div className="row">
              <h3>Your Cart is Empty</h3>
            </div>
          </div>
        </div>
      )}
      {state.length !== 0  && button()}
    </>
  );
};
export default Cart;
