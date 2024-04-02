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
    navigate("/login");
  };

  return (
    // <header className="header">
    //   <div className="logo">
    //     <Link to="/">Quinielafy</Link>
    //   </div>
    //   <ul>
    //     {user ? (
    //       <div style={{ display: "flex", alignItems: "center" }}>
    //         <li>
    //           <p>Bienvenido, {user && user.name.split(" ")[0]}</p>
    //         </li>
    //         <li>
    //           <button className="btn" onClick={onLogout}>
    //             <FaSignOutAlt /> Logout
    //           </button>
    //         </li>
    //       </div>
    //     ) : (
    //       <>
    //         <li>
    //           <Link to="/login">
    //             <FaSignInAlt />
    //             Login
    //           </Link>
    //         </li>
    //         <li>
    //           <Link to="/register">
    //             {" "}
    //             <FaUser /> Register
    //           </Link>
    //         </li>
    //       </>
    //     )}
    //   </ul>
    // </header>
    <header>
      <div className="w-full h-[10vh] p-4 bg-darkMainColor flex justify-between items-center">
        <div className="text-2xl text-white">
          <Link to="/">Quinielafy</Link>
        </div>
        <ul>
          {user ? (
            <div className="flex items-center">
              <li>
                <p className="text-white text-base">
                  Bienvenido {user && user.name.split(" ")[0]}
                </p>
              </li>
              <li>
                <button
                  className="flex items-center justify-around p-3 mx-3 bg-white text-darkMainColor rounded-md w-24 hover:scale-105 duration-200"
                  onClick={onLogout}
                >
                  <FaSignOutAlt /> Logout
                </button>
              </li>
            </div>
          ) : (
            <>
              <li>
                <li>
                  <p className="text-white text-base">Bienvenido</p>
                </li>
              </li>
            </>
          )}
        </ul>
      </div>
    </header>
  );
};

export default Header;
