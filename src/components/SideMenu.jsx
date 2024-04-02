import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";

import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from "@ant-design/icons";

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem("Option 1", "1", <PieChartOutlined />),
  getItem("Option 2", "2", <DesktopOutlined />),
  getItem("Option 3", "3", <ContainerOutlined />),
];

const SideMenu = () => {
  return (
    <div className="box-border w-[20vw] h-[90vh]   bg-slate-400">
      <Menu
        defaultSelectedKeys={["home"]}
        mode="inline"
        theme="dark"
        // items={items}
        className="bg-darkMainColor h-full text-white"
      >
        <Menu.Item key="home" className=" text-base">
          <Link to="/">Quinielas</Link>
        </Menu.Item>
        <Menu.Item key="about" className=" text-base">
          <Link to="/">Torneos</Link>
        </Menu.Item>
        <Menu.Item key="contact" className=" text-base">
          <Link to="/">Contacto</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default SideMenu;
