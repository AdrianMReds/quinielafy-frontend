import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import { useLocation } from "react-router-dom";
import {
  UnorderedListOutlined,
  TrophyFilled,
  ContactsFilled,
  BarChartOutlined,
} from "@ant-design/icons";
import AdminSideMenu from "./admin/AdminSideMenu";
import { selectedMenuTab } from "../utils/functions";

const SideMenu = () => {
  const location = useLocation();

  const currentPath = location.pathname;
  return !currentPath.includes("/admin") ? (
    <div className="hidden md:block box-border w-[20vw] h-[90vh]   bg-slate-400">
      <Menu
        defaultSelectedKeys={selectedMenuTab(location.pathname)}
        mode="inline"
        theme="dark"
        className="bg-darkMainColor h-full text-white"
      >
        <Menu.Item
          key="home"
          className=" text-lg"
          icon={<UnorderedListOutlined />}
        >
          <Link to="/">Quinielas</Link>
        </Menu.Item>
        <Menu.Item key="about" className=" text-lg" icon={<TrophyFilled />}>
          <Link to="/">Torneos</Link>
        </Menu.Item>
        <Menu.Item
          key="statistics"
          className=" text-lg"
          icon={<BarChartOutlined />}
        >
          <Link to="/">Estadísticas</Link>
        </Menu.Item>
        <Menu.Item key="contact" className=" text-lg" icon={<ContactsFilled />}>
          <Link to="/">Contacto</Link>
        </Menu.Item>
      </Menu>
    </div>
  ) : (
    <AdminSideMenu />
  );
};

export default SideMenu;
