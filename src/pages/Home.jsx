

import Products from "../components/Products";
import "./Home.css";

const Home = () => {
  return (
    <>
 
      <div className="header">
        <div className="card bg-dark text-white border-0">
          <img
            src="/img/cdb82e4017c4ed3247a743b4deb7f0fe.jpg"
            className="card-img backgroundHeader"
            alt="Background"
          />
          <div className="card-img-overlay d-flex flex-column justify-content-center">
            <div className="container">
              <h5 className="card-title display-3 fw-bolder mb-0 text-dark my-5">
                New Season Arrivals
              </h5>
              <p className="card-text lead fs-2 text-dark">
                Check Out All The Trends
              </p>
            </div>
          </div>
        </div>
        <Products />
      </div>
    </>
  );
};

export default Home;

// https://i.pinimg.com/564x/a7/69/3a/a7693afb266c1eda20d381c3801e1abf.jpg
