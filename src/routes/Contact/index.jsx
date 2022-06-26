import React from "react";
import "antd/dist/antd.css";
import { Layout, Typography } from "antd";

const { Footer } = Layout;
const { Title } = Typography;

function Contact() {
  return (
    <Layout>
      <Footer className="footer">
        <Title className="footerLink">aghniihsn@gmail</Title>
        <Title level={5} type="secondary">
          Always down to collaborate when I have the time. I'm hoping to further my career. <br />
          Let's get in touch ✌️.
        </Title>
        <br />
        <a href="https://mail.google.com/mail/u/0/#inbox" className="footerLink">
          <img src="email.png" alt="icon" />
        </a>
        <a href="https://www.linkedin.com/in/aghni-hasna-mufida-1a1576229/" className="footerLink">
          <img src="linkedin.png" alt="icon" />
        </a>
        <a href="https://github.com/aghniihsn" className="footerLink">
          <img src="github.png" alt="icon" />
        </a>
        <a href="https://www.instagram.com/aghniihsn._/" className="footerLink">
          <img src="instagram.png" alt="icon" />
        </a>
        <br />
        <br />
        <p>
          Copyright ©2022 Created by Aghni Hasna.
          <br />
          Icons courtesy of Ant.
        </p>
      </Footer>
    </Layout>
  );
}

export default Contact;
