import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Menu } from "antd";
import { selectedMenuTab } from "../../utils/functions";

import {
  UnorderedListOutlined,
  TrophyFilled,
  ContactsFilled,
  BarChartOutlined,
  UserOutlined,
  BackwardOutlined,
} from "@ant-design/icons";

const AdminSideMenu = () => {
  const location = useLocation();

  const navigate = useNavigate();
  return (
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
          <Link to="/admin">Quinielas</Link>
        </Menu.Item>
        <Menu.Item key="torneos" className=" text-lg" icon={<TrophyFilled />}>
          <Link to="/admin/torneos">Torneos</Link>
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
