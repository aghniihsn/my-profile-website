import React from "react";
import "antd/dist/antd.css";
import { Row, Col, Layout } from "antd";

const { Content } = Layout;

function About() {
  return (
    <Layout className="about">
      <Content>
        <div className="site-layout-content">
          <h1 className="title">
            <i>Originally from Cimahi, Jawa Barat.</i>
          </h1>
          <Row className="row-content">
            <Col span={10} offset={2} xs={8} sm={16} md={9} lg={9} xl={8}>
              <div className="gambar">
                <img src="https://aghniihsn.github.io/profile/img/20220626_105257.jpg" alt="profile" />
              </div>
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
          <Col xs={24} sm={17} md={12} lg={10} xl={10} xxl={7}>
            <h1 italic className="title">
              <i>Education</i>
            </h1>
            <h4 className="title">SMK Negeri 11 Bandung</h4>
            <h5 className="title">Software Engineering</h5>
          </Col>
          <Row className="row-content">
            <Col span={10} offset={2} xs={20} sm={18} lg={8}>
              <h1>
                <i>Experience</i>
              </h1>
              <h4>PT. Clodeo Indonesia Jaya</h4>
              <p>
                Internship, Front-end Developer <i>• April 2022-Juni 2022</i>
              </p>
            </Col>
            <Col offset={2} span={8} xs={20} sm={18} lg={11}>
              <h1>
                <i>Skills</i>
              </h1>
              <h4>Engineering</h4>
              <p>• HTML • Javascript • Git • Java • PHP • SQLYog • React</p>
            </Col>
          </Row>
        </div>
      </Content>
    </Layout>
  );
}
export default About;
