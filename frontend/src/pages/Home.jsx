import React from "react";
import ApiStatus from "../components/ApiStatus";
import Bean from "../assets/img/bean.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        <div className="col-lg-6 text-center text-lg-start mb-4 mb-lg-0">
          <h1 className="mb-4">¡Bienvenido a Cafeteria directory!</h1>
          <p className="text-muted fs-5 mb-4">
            ¡Hola! Bienvenido a Cafeteria directory. En esta aplicación podrás
            encontrar información sobre los locales de cafetería de tu ciudad.
          </p>
          <div className="mb-4">
            <ApiStatus />
          </div>
          <Link
            to="/locales"
            className="btn btn-success d-flex align-items-center justify-content-center mx-auto mx-lg-0 w-100"
          >
            <span className="me-2">Ver locales</span>
            <i className="fa fa-magnifying-glass"></i>
          </Link>
        </div>
        <div className="col-lg-6 text-center">
          <img src={Bean} alt="Bean logo" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default Home;
