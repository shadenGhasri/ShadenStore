import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className ="card bg-dark text-white">
        <img src="../../img/cdb82e4017c4ed3247a743b4deb7f0fe.jpg" className ="card-img a" alt="..." />
        <div className ="card-img-overlay">
          <h5 className ="card-title">Card title</h5>
          <p className ="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <p className ="card-text">Last updated 3 mins ago</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
