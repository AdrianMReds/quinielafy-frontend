import React, { setState, useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaSignInAlt, FaUser, FaSignOutAlt } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";

import { MenuOutlined } from "@ant-design/icons";
import ResponsiveSideMenu from "./ResponsiveSideMenu";
import ResponsiveAdminSideMenu from "./admin/ResponsiveAdminSideMenu";

const Header = () => {
  const [menu, setMenu] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const location = useLocation();

  const currentPath = location.pathname;

  const onLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  const handleMenu = () => {
    setMenu(!menu);
  };

  useEffect(() => {
    if (currentPath.includes("/admin")) {
      if (!user || !user.admin) {
        navigate("/");
      }
    }
  }, []);

  return (
    <header className="relative">
      <div className="w-full h-[10vh] p-4 bg-darkMainColor flex justify-between items-center">
        <div className="text-2xl text-white">
          {currentPath.includes("/admin") ? (
            <Link to="/admin">Quinielafy administradores</Link>
          ) : (
            <Link to="/">Quinielafy</Link>
          )}
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
      {currentPath.includes("/admin") ? (
        <ResponsiveAdminSideMenu
          menu={menu}
          handleMenu={handleMenu}
          onLogout={onLogout}
        />
      ) : (
        <ResponsiveSideMenu
          menu={menu}
          handleMenu={handleMenu}
          onLogout={onLogout}
        />
      )}
    </header>
  );
};

export default Header;
