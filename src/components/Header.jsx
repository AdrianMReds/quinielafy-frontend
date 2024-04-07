import React, { setState, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSignInAlt, FaUser, FaSignOutAlt } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";

import { MenuOutlined } from "@ant-design/icons";
import ResponsiveSideMenu from "./ResponsiveSideMenu";

const Header = () => {
  const [menu, setMenu] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <header className="relative">
      <div className="w-full h-[10vh] p-4 bg-darkMainColor flex justify-between items-center">
        <div className="text-2xl text-white">
          <Link to="/">Quinielafy</Link>
        </div>
        {user && (
          <div onClick={handleMenu}>
            <MenuOutlined className="md:hidden text-white text-xl" />
          </div>
        )}

        <ul className="hidden md:block">
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
                <p className="text-white text-base">Bienvenido</p>
              </li>
            </>
          )}
        </ul>
      </div>

      {/* Responsive side menu */}
      <ResponsiveSideMenu menu={menu} handleMenu={handleMenu} />
    </header>
  );
};

export default Header;
