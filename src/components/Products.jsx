import "./Products.css";
import { useState, useEffect } from "react";
import axios from "axios";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  const componentMounted = true;

  const URL = "https://fakestoreapi.com/products";

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await axios.get("https://fakestoreapi.com/products");
      if(componentMounted){
          setLoading(false)
          console.log(filter);
      }
      return ()=>{
        componentMounted = false;
      }
    };

    getProducts();

  }, []);

  const Loading = ()=>{
      return(
          <>
              Loading ...
          </>
      )
  }

  const ShowProducts = ()=>{
     return(
        <div className="buttonsFilter d-flex justify-content-center">
          <button className="btn btn-outline-dark me-2">All</button>
          <button className="btn btn-outline-dark me-2">Men's Clothing</button>
          <button className="btn btn-outline-dark me-2">Women's Clothing</button>
          <button className="btn btn-outline-dark me-2">Jewelery</button>
          <button className="btn btn-outline-dark me-2">Electronic</button>
        </div>
     )
  }

  return (<div>
      <div className="container my-5 py-5">
          <div className="row">
              <div className="col-12 mb-5">
                  <h1 className="display-6 fw-bolder text-center">Lets  Products</h1>
                  <hr />
              </div>
          </div>
          <div className="row justify-content-center">
              {loading ? <Loading/> : <ShowProducts/>}
          </div>
      </div>
  </div>
  );
};

export default Products;
