import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";

import {
  UnorderedListOutlined,
  TrophyFilled,
  ContactsFilled,
  BarChartOutlined,
} from "@ant-design/icons";

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
        <Menu.Item
          key="home"
          className=" text-base"
          icon={<UnorderedListOutlined />}
        >
          <Link to="/">Quinielas</Link>
        </Menu.Item>
        <Menu.Item key="about" className=" text-base" icon={<TrophyFilled />}>
          <Link to="/">Torneos</Link>
        </Menu.Item>
        <Menu.Item
          key="statistics"
          className=" text-base"
          icon={<BarChartOutlined />}
        >
          <Link to="/">Estadísticas</Link>
        </Menu.Item>
        <Menu.Item
          key="contact"
          className=" text-base"
          icon={<ContactsFilled />}
        >
          <Link to="/">Contacto</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default SideMenu;
