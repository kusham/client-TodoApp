import { Avatar, Layout } from "antd";
import React from "react";
import { HeaderContent } from "./Layout-style";

const Header = () => {
  var user = JSON.parse(sessionStorage.getItem("user"));
  return (
    <Layout.Header style={{ borderRadius: "20px" }}>
      <HeaderContent>
        <span>{user?.fullName}</span>
        <Avatar>
          {user?.fullName.charAt(0)}
          </Avatar>
      </HeaderContent>
    </Layout.Header>
  );
};

export default Header;
