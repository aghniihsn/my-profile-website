import React from "react";
import "antd/dist/antd.css";
import { Typography, Row, Col, Layout } from "antd";

const { Content } = Layout;
const { Title } = Typography;

function About() {
  return (
    <Layout>
      <Content>
        <div className="site-layout-content">
          <Title italic className="title">
            Originally from Cimahi, Jawa Barat.
          </Title>
          <Row className="row-content">
            <Col span={10} offset={2}>
              <img src="img/20220626_105257.jpg" alt="profile" />
            </Col>
            <Col span={8}>
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
          <Title italic className="title">
            Education
          </Title>
          <Title level={4} type="secondary" className="title">
            SMK Negeri 11 Bandung
          </Title>
          <Title level={5} type="secondary" className="title">
            Software Engineering
          </Title>
          <Row className="row-content">
            <Col span={10} offset={2}>
              <Title italic>Experience</Title>
              <Title level={4} type="secondary">
                PT. Clodeo Indonesia Jaya
              </Title>
              <p>
                Internship, Front-end Developer <i>• April 2022-Juni 2022</i>
              </p>
            </Col>
            <Col span={7}>
              <Title italic>Skills</Title>
              <Title level={4} type="secondary">
                Engineering
              </Title>
              <Title level={5} className="h5">
                • HTML • Javascript • Git • Java • PHP • SQLYog
              </Title>
            </Col>
          </Row>
        </div>
      </Content>
    </Layout>
  );
}
export default About;
