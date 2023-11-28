import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSignInAlt, FaUser, FaSignOutAlt } from "react-icons/fa";

const Header = () => {
  const onLogout = () => {};

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">Quinielafy</Link>
      </div>
      <ul>
        <>
          <li>
            <Link to="/login">
              <FaSignInAlt />
              Login
            </Link>
          </li>
          <li>
            <Link to="/register">
              {" "}
              <FaUser /> Register
            </Link>
          </li>
        </>
      </ul>
    </header>
  );
};

export default Header;
