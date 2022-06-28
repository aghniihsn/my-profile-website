import React from "react";
import "antd/dist/antd.css";
import { Layout, Menu, Typography, Col, Row, Button } from "antd";
import { Link, animateScroll as scroll } from "react-scroll";
import { HomeFilled } from "@ant-design/icons";

const { Title } = Typography;
const { Header, Content } = Layout;

function Home() {
  return (
    <Layout className="layout">
      <Header
        className="new-header"
        style={{
          position: "fixed",
          zIndex: 1,
          width: "100%",
        }}
      >
        <Row>
          <Col span={12} offset={2} className="icon">
            <img src="letter-a.png" alt="icon" />
          </Col>
          <Col span={8} offset={1}>
            <Menu mode="horizontal">
              <Menu.Item key="Home" icon={<HomeFilled />}>
                <Link activeClass="active" to="layout" spy={true} smooth={true} offset={-50} duration={500} /> Home
              </Menu.Item>
              <Menu.Item key="about">
                <Link activeClass="active" to="about" spy={true} smooth={true} offset={-50} duration={500} /> About
              </Menu.Item>
              <Menu.Item key="portofolio">
                <Link activeClass="active" to="portofolio" spy={true} smooth={true} offset={-70} duration={500} /> Portofolio
              </Menu.Item>
              <Menu.Item key="contact">
                <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-150} duration={500} />
                Contact
              </Menu.Item>
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
            <Button className="button">
              <a href="https://drive.google.com/file/d/1HxSCjgZ6XjSGPB8E1A6tDTom-pNPHoHy/view?usp=sharing">Download CV</a>
            </Button>
          </div>
        </div>
      </Content>
    </Layout>
  );
}

export default Home;
