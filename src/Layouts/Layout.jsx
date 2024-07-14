import React from "react";
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";
import { ContentWrapper, CustomContent, CustomLayout } from "./Layout-style";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";

const Layout = (WrappedComponent) => {
  return (
    <CustomLayout>
      <Sidebar />
      <CustomLayout>
        <Header />
        <CustomContent>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>
              <Link to="/">Home</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link to="/todos">Todos</Link>
            </Breadcrumb.Item>
          </Breadcrumb>
          <ContentWrapper>
            <WrappedComponent  />
          </ContentWrapper>
        </CustomContent>
        <Footer />
      </CustomLayout>
    </CustomLayout>
  );
};

export default Layout;
