import "./Navbar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="container d-flex justify-content-between align-items-center">
      <h2 className="navLog">SHADEN</h2>
      <div className="navItem d-flex align-items-center">
        <p className="px-3">Home</p>
        <p className="px-3">Products</p>
        <p className="px-3">About</p>
      </div>
      <div className="d-flex align-items-center navIcon">
        <i class="bi bi-person px-2 fs-4"></i>
        <div className="px-2 fs-5">
          <i class="bi bi-bag-check"></i>
          <span>0</span>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
