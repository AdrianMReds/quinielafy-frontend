import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSignInAlt, FaUser, FaSignOutAlt } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">Quinielafy</Link>
      </div>
      <ul>
        {user ? (
          <div style={{ display: "flex", alignItems: "center" }}>
            <li>
              <p>Bienvenido, {user && user.name.split(" ")[0]}</p>
            </li>
            <li>
              <button className="btn" onClick={onLogout}>
                <FaSignOutAlt /> Logout
              </button>
            </li>
          </div>
        ) : (
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
        )}
      </ul>
    </header>
  );
};

export default Header;
