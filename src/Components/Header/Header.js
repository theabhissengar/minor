import React from "react";
import logo from "../../assets/logo.jpg";
import "./header.css";
const Header = () => {
  return (
    <>
      <div className="main-header">
        <img src={logo} alt=""></img>
        <button>Register</button>
      </div>
    </>
  );
};

export default Header;
