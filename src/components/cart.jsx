import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { delCart } from "../redux/action/index";
import "./cart.css";

const Cart = () => {
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();

  const handleClose = (item)=>{
    dispatch(delCart(item))
  }
  
  const cartItems = (cartItem) => {
    return (
      <div className="d-flex justify-content-center my-5">
        <div className="shadow-sm boxCart px-2 py-5">
          <button className="btn-close float-end" aria-label="Close" onClick={()=>handleClose(cartItem)}></button>
          <div className="row justify-content-center">
            <div className="col-md-4">
              <img src={cartItem.image} alt={cartItem.title} height="200px" width="180px" />
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

  return <>{state && state.map(cartItems)}</>;
};
export default Cart;
