import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu } from "antd";

import {
  UnorderedListOutlined,
  TrophyFilled,
  ContactsFilled,
  BarChartOutlined,
  UserOutlined,
  BackwardOutlined,
} from "@ant-design/icons";

const AdminSideMenu = () => {
  const navigate = useNavigate();
  return (
    <div className="hidden md:block box-border w-[20vw] h-[90vh]   bg-slate-400">
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
        >
          <Link to="/admin">Quinielas</Link>
        </Menu.Item>
        <Menu.Item key="about" className=" text-lg" icon={<TrophyFilled />}>
          <Link to="/admin">Torneos</Link>
        </Menu.Item>
        <Menu.Item
          key="statistics"
          className=" text-lg"
          icon={<BarChartOutlined />}
        >
          <Link to="/admin">Estadísticas</Link>
        </Menu.Item>

        <Menu.Item key="users" className=" text-lg" icon={<UserOutlined />}>
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
      </Menu>
    </div>
  );
};

export default AdminSideMenu;
