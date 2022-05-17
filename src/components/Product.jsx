import { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";
import Loading from "./Loading";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );
      setProduct(response.data);
      setLoading(false);
    };
    getProduct();
  }, []);

  const ShowProduct = () => {
    return (
      <>
        <div className="col-md-6 pt-5">
          <img
            src={product.image}
            alt={product.title}
            height="400px"
            width="400px"
          />
        </div>
        <div className="col-md-6">
          <h4 className="text-uppercase text-black-50">{product.category}</h4>
          <h1 className="display-5">{product.title}</h1>
          <p className="lead fw-bolder">
            Rating {product.rating && product.rating.rate}{" "}
            <i className="bi bi-star"></i>
          </p>
          <h5 className="display-6 fw-bold my-4">
              ${product.price}
          </h5>
          <p className="lead">{product.description}</p>
          <button className="btn btn-outline-dark px-4 py-2">Add to Cart</button>
          <NavLink to="/cart" className="btn btn-dark ms-2 px-3 py-2">Go to Cart</NavLink>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="container">
        <div className="row mt-5">{loading ? <Loading /> : <ShowProduct />}</div>
      </div>
    </>
  );
};

export default Product;
