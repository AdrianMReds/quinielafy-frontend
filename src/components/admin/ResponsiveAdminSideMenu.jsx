import React from "react";
import { Menu } from "antd";
import {
  UnorderedListOutlined,
  TrophyFilled,
  ContactsFilled,
  BarChartOutlined,
  UserOutlined,
  LogoutOutlined,
  BackwardOutlined,
} from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";

const ResponsiveAdminSideMenu = ({ menu, handleMenu, onLogout }) => {
  const navigate = useNavigate();
  return (
    <div
      className={
        menu
          ? "absolute w-full left-0 bg-darkMainColor z-10 h-[100vh] transition-all ease-in-out duration-500 md:hidden"
          : "fixed left-[-100%] md:hidden"
      }
    >
      <div
        className={
          menu
            ? "absolute w-full left-0 bg-darkMainColor z-10 h-[100vh] transition-all ease-in-out duration-500 md:hidden"
            : "fixed left-[-100%] md:hidden"
        }
      >
        <Menu
          defaultSelectedKeys={["home"]}
          mode="inline"
          theme="dark"
          className="bg-darkMainColor h-full text-white"
        >
          <Menu.Item
            key="home"
            className=" text-lg"
            icon={<UnorderedListOutlined />}
            onClick={handleMenu}
          >
            <Link to="/admin">Quinielas</Link>
          </Menu.Item>

          <Menu.Item
            key="about"
            className=" text-lg"
            icon={<TrophyFilled />}
            onClick={handleMenu}
          >
            <Link to="/admin">Torneos</Link>
          </Menu.Item>

          <Menu.Item
            key="statistics"
            className=" text-lg"
            icon={<BarChartOutlined />}
            onClick={handleMenu}
          >
            <Link to="/admin">Estadísticas</Link>
          </Menu.Item>

          <Menu.Item
            key="users"
            className=" text-lg"
            icon={<UserOutlined />}
            onClick={handleMenu}
          >
            <Link to="/admin">Usuarios</Link>
          </Menu.Item>

          <Menu.Item
            key="back"
            className=" text-lg"
            icon={<BackwardOutlined />}
            onClick={() => {
              navigate("/");
              handleMenu();
            }}
          >
            <Link to="/admin">Regresar</Link>
          </Menu.Item>

          <Menu.Item
            key="logout"
            className=" text-lg"
            icon={<LogoutOutlined />}
            onClick={() => {
              onLogout();
              handleMenu();
            }}
          >
            <Link to="/admin">Logout</Link>
          </Menu.Item>
        </Menu>
      </div>
    </div>
  );
};

export default ResponsiveAdminSideMenu;
