import React from "react";
import {Link} from "react-router-dom";

const Navbar = props =>{
  return(
    <div className="navbar bg-primary">
      <h1>
        <i className="fas fa-id-card-alt" /> ContactKeeper
      </h1>
      <ul>
        <li>
          <Link to="/" >Home</Link>
        </li>
        <li>
          <Link to="/about" >About</Link>
        </li>
        <li>
          <Link to="/register" >Sign Up</Link>
        </li>
        <li>
          <Link to="/login" >Sign In</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar;
