import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const NavBar = () => {
  const state = useSelector(state=> state.handleCart);
  return (
    <nav className="shadow-sm">
      <div className="container  d-flex justify-content-between align-items-center my-3">
        <h4 className="navLog">SHADEN</h4>
        <div className="navItems d-flex justify-content-center align-items-center">
          <NavLink to="/" className="navItem px-3 text-dark" style={({isActive})=> { return {color: isActive ? "blue" : "black" , textDecorationLine : "none"}}}>
            Home
          </NavLink>
          <NavLink to="/products" className="navItem px-3 text-dark" style={({isActive})=> { return {color: isActive ? "blue" : "black" , textDecorationLine : "none"}}}>
            Products
          </NavLink>
          <NavLink to="/about" className="navItem px-3 text-dark" style={({isActive})=> { return {color: isActive ? "blue" : "black" , textDecorationLine : "none"}}}>
            About
          </NavLink>
        </div>
        <div className="d-flex align-items-center navIcon">
          <NavLink to="/register" style={({isActive})=> { return {color: isActive ? "blue" : "black" , textDecorationLine : "none"}}}>
            <i className="bi bi-person px-1 fs-4 text-dark"></i>
          </NavLink>
          <div className="px-1 fs-5">
           <NavLink to = "/cart" style={({isActive})=> { return {color: isActive ? "blue" : "black" , textDecorationLine : "none"}}} >
           <i className="bi bi-bag-check text-dark"></i><span className="text-dark">{state.length}</span>
           </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
