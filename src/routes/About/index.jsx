import React from "react";
import "antd/dist/antd.css";
import { Typography, Row, Col, Layout } from "antd";

const { Content } = Layout;
const { Title } = Typography;

function About() {
  return (
    <Layout className="about">
      <Content>
        <div className="site-layout-content">
          <Title italic className="title">
            Originally from Cimahi, Jawa Barat.
          </Title>
          <Row className="row-content">
            <Col span={10} offset={2} xs={8} sm={16} md={9} lg={9} xl={8}>
              <img src="https://aghniihsn.github.io/profile/img/20220626_105257.jpg" alt="profile" />
            </Col>
            <Col span={8} xs={19} sm={20} md={14} lg={11} xl={12} offset={2}>
              <p>
                Heyo, I'm Aghni - a web developer. I was born and raised in Cimahi, West Java. Growing up, I had a unique perspective on the world. Especially about the circle of friends. I learned that everyone has a different background
                story, and that It is important to be open to change and fresh ideas.
                <br />
                <br /> I found love to write new code recently. And I will graduate from school in 2023 in Computer Science Focusing on software engineering. Currently, I am a 3rd grade high school student at SMK Negeri 11 Bandung. Outside
                of writing code I'm a fan of kpop idols, and love exploring the outdoors.
                <br />
                <br />A fun fact for me is that I easily get along with new people and can't stay at home for long periods of time, aka I like being outdoors with my friends and family. <br />
                <br />I always come down to collaborate when I have time. <br />
                Reach come out and let's chat!
              </p>
            </Col>
          </Row>
          <Col xs={24} sm={16} md={12} lg={10} xl={10} xxl={7}>
            <Title italic className="title">
              Education
            </Title>
            <Title level={4} type="secondary" className="title">
              SMK Negeri 11 Bandung
            </Title>
            <Title level={5} type="secondary" className="title">
              Software Engineering
            </Title>
          </Col>
          <Row className="row-content">
            <Col span={10} offset={2} xs={20} sm={18} lg={8}>
              <Title italic>Experience</Title>
              <Title level={4} type="secondary">
                PT. Clodeo Indonesia Jaya
              </Title>
              <p>
                Internship, Front-end Developer <i>• April 2022-Juni 2022</i>
              </p>
            </Col>
            <Col offset={2} span={8} xs={20} sm={18} lg={11}>
              <Title italic>Skills</Title>
              <Title level={4} type="secondary">
                Engineering
              </Title>
              <Title level={5} className="h5">
                • HTML • Javascript • Git • Java • PHP • SQLYog • React
              </Title>
            </Col>
          </Row>
        </div>
      </Content>
    </Layout>
  );
}
export default About;
