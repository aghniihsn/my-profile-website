import React from "react";
import "antd/dist/antd.css";
import { Layout, Menu, Typography, Col, Row } from "antd";
import { HomeFilled } from "@ant-design/icons";

const { Title } = Typography;
const { Header, Content } = Layout;

function Home() {
  return (
    <Layout className="layout">
      <Header className="new-header">
        <Row>
          <Col span={12} offset={2} className="icon">
            <img src="letter-a.png" alt="icon" />
          </Col>
          <Col span={8} offset={1}>
            <Menu mode="horizontal" defaultSelectedKeys={["Home"]}>
              <Menu.Item key="Home" icon={<HomeFilled />}>
                Home
              </Menu.Item>
              <Menu.Item key="about">About</Menu.Item>
              <Menu.Item key="portofolio">Portofolio</Menu.Item>
              <Menu.Item key="contact">Contact</Menu.Item>
            </Menu>
          </Col>
        </Row>
      </Header>
      <Content>
        <div className="site-layout-content-home">
          <div className="home-title">
            <Title italic>Hello! I'm Aghni</Title>
            <Title level={5} type="secondary">
              Web Developer.
              <br />
              Currently based in Cimahi, Jawa Barat.
            </Title>
          </div>
        </div>
      </Content>
    </Layout>
  );
}

export default Home;
