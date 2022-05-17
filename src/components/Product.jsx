import { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";
import Skeleton from "react-loading-skeleton";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [counter,setCounter] = useState(0);

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

  const Loading = ()=>{
    return(
        <>
            <div className="col-md-6">
                <Skeleton height={400}/>
            </div>
            <div className="col-md-6">
                <Skeleton height={50} width={300} />
                <Skeleton height={75}  />
                <Skeleton height={25} width={150} />
                <Skeleton height={50}  />
                <Skeleton height={150}/>
                <Skeleton height={50} width={100}/>
                <Skeleton height={50} width={100} style={{marginLeft:6}}/>
            </div>
        </>
    )
  }

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
          <h5 className="display-5 fw-bold my-4">
              ${product.price}
          </h5>
          <p className="lead">{product.description}</p>
          <button className="btn btn-outline-dark px-4 py-2" onClick={()=>{setCounter(counter+1)}}>Add to Cart</button>
          <NavLink to="/cart" className="btn btn-dark ms-2 px-3 py-2">Go to Cart</NavLink>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="container">
        <div className="row mt-4">{loading ? <Loading /> : <ShowProduct />}</div>
      </div>
    </>
  );
};

export default Product;
