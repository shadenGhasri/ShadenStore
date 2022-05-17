import "./Navbar.css";
import { NavLink } from "react-bootstrap";

const NavBar = () => {
  return (
    <nav className="shadow-sm">
      <div className="container  d-flex justify-content-between align-items-center my-3">
        <h4 className="navLog">SHADEN</h4>
        <div className="navItems d-flex justify-content-center">
          <NavLink to="/" className="navItem px-3">
            Home
          </NavLink>
          <NavLink to="/products" className="navItem px-3">
            Products
          </NavLink>
          <NavLink to="/about" className="navItem px-3">
            About
          </NavLink>
        </div>
        <div className="d-flex align-items-center navIcon">
          <NavLink to="/register">
            <i className="bi bi-person px-1 fs-4"></i>
          </NavLink>
          <div className="px-1 fs-5">
           <NavLink to = "/cart" >
           <i className="bi bi-bag-check"></i>
           </NavLink>
            <span>0</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
