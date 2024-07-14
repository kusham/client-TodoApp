import { Layout } from "antd";
import styled from "styled-components";

const { Content, Footer, Sider } = Layout;

export const CustomLayout = styled(Layout)`
  min-height: 100vh;
  padding: 20px;
`;

export const CustomContent = styled(Content)`
  margin: 0 16px;
`;

export const CustomFooter = styled(Footer)`
  text-align: center;
`;

export const CustomSider = styled(Sider)`
  background-color: #f0f2f5;
`;

export const ContentWrapper = styled.div`
  padding: 4px 24px;
  min-height: 400px;
  background: #fff;
  border-radius: 10px;
`;

export const SliderContentWrapper = styled.div`
  margin-top: 10px;
`;

export const Logo = styled.h1`
  color: white;
  text-align: center;
  font-size: 1.3rem;
  padding: 0px 0;
  background: #001529;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-family: "Roboto", sans-serif;
`;
export const HeaderContent = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  .ant-avatar {
    background-color: gray;
  }
  gap: 10px;
  span {
    color: white;
  }
`;
