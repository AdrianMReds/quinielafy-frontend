import React from "react";
import { Menu } from "antd";
import {
  UnorderedListOutlined,
  TrophyFilled,
  ContactsFilled,
  BarChartOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const ResponsiveSideMenu = ({ menu, handleMenu, onLogout }) => {
  return (
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
          <Link to="/">Quinielas</Link>
        </Menu.Item>

        <Menu.Item
          key="about"
          className=" text-lg"
          icon={<TrophyFilled />}
          onClick={handleMenu}
        >
          <Link to="/">Torneos</Link>
        </Menu.Item>
        <Menu.Item
          key="statistics"
          className=" text-lg"
          icon={<BarChartOutlined />}
          onClick={handleMenu}
        >
          <Link to="/">Estadísticas</Link>
        </Menu.Item>

        <Menu.Item
          key="contact"
          className=" text-lg"
          icon={<ContactsFilled />}
          onClick={handleMenu}
        >
          <Link to="/">Contacto</Link>
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
          <Link to="/">Logout</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default ResponsiveSideMenu;
