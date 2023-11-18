import { Layout, theme } from "antd";

const { Header } = Layout;

export default function HeaderSection() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Header
      style={{
        padding: 0,
        background: colorBgContainer,
      }}
    >
      React Examples
    </Header>
  );
}
