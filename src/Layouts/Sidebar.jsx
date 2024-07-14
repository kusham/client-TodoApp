import { Menu } from "antd";
import React, { useState } from "react";
import { CustomSider, Logo, SliderContentWrapper } from "./Layout-style";
import { Link } from "react-router-dom";
import {
  AlignLeftOutlined,
  AppstoreAddOutlined,
  HomeFilled,
  UserOutlined,
  UnorderedListOutlined
} from "@ant-design/icons";


const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const onCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };
  return (
    <CustomSider collapsible collapsed={collapsed} onCollapse={onCollapse}>
      <Logo>{collapsed ? "Todo" : "Todo App"}</Logo>
      <SliderContentWrapper>
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item key="0" icon={<HomeFilled />} disabled>
            Dashboard
          </Menu.Item>
          <Menu.Item key="1" icon={<UnorderedListOutlined />}>
            <Link to={`/todos`}>Todo List</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<AppstoreAddOutlined />}>
            <Link to={`/todo/create`}>Create Todo</Link>
          </Menu.Item>
          {/* <Menu.Item key="3" icon={<UserOutlined />}>
            <Link to={`/todos`}>Todo List</Link>
          </Menu.Item> */}
          <Menu.SubMenu key="3" title="User Profile" icon={<UserOutlined />}>
            <Menu.Item key="4" disabled icon={<AlignLeftOutlined />}>
              View
            </Menu.Item>
            <Menu.Item key="5" disabled icon={<AlignLeftOutlined />}>
              Edit
            </Menu.Item>
          </Menu.SubMenu>
        </Menu>
      </SliderContentWrapper>
    </CustomSider>
  );
};

export default Sidebar;
