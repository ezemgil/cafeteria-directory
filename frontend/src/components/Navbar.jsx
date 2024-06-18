import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg bg-success sticky-top"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          <i class="fa-solid fa-mug-hot m-1"></i>
          Cafeteria directory
        </NavLink>
        <button className="navbar-toggler" type="button">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-lg-auto text-center">
            <NavLink className="nav-link" to="/">
              <i class="fa-solid fa-house m-1"></i>
              Inicio
            </NavLink>
            <NavLink className="nav-link" to="/locales">
              <i class="fa-solid fa-map-location-dot m-1"></i>
              Locales
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
