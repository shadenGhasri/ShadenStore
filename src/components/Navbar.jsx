import "./Navbar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="shadow-sm">
      <div className="container  d-flex justify-content-between align-items-center my-3">
        <h4 className="navLog">SHADEN</h4>
        <div className="navItems d-flex justify-content-center">
          <p className="navItem px-3">Home</p>
          <p className="navItem px-3">Products</p>
          <p className="navItem px-3">About</p>
        </div>
        <div className="d-flex align-items-center navIcon">
          <i className="bi bi-person px-2 fs-4"></i>
          <div className="px-2 fs-5">
            <i className="bi bi-bag-check"></i>
            <span>0</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
