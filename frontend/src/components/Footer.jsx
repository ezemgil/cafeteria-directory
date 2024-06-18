import React from "react";

const Footer = () => {
  return (
    <footer className="text-center mt-auto bg-success text-white text-center p-3">
      <span>
        &copy; {new Date().getFullYear()} Cafeteria Directory | Hecho con{" "}
        <i className="fa fa-heart text-danger"></i>
      </span>
    </footer>
  );
};

export default Footer;
