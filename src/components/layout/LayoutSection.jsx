import { Layout, Menu, theme } from "antd";

import BreadcrumbSection from "../breadcrumb/BreadcrumbSection";
import HeaderSection from "./HeaderSection";
import { items } from "./SidebarItems";
import { routes } from "../../routes/routes";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const { Content, Sider } = Layout;
export default function LayoutSection() {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <HeaderSection />

      <Layout>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
        >
          <div className="demo-logo-vertical" />
          <Menu
            theme="dark"
            defaultSelectedKeys={["2"]}
            mode="inline"
            items={items}
            onSelect={({ item }) => navigate(item.props.title)}
          />
        </Sider>
        <Content
          style={{
            margin: "0 16px",
          }}
        >
          <BreadcrumbSection />
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
            {routes()}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}
