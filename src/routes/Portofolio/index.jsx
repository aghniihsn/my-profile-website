import React from "react";
import "antd/dist/antd.css";
import { Typography, Layout, Card, Col } from "antd";

const { Content } = Layout;
const { Meta } = Card;
const { Title } = Typography;

function portofolio() {
  return (
    <Layout className="portofolio">
      <Content>
        <Title italic className="home-title">
          Portofolio
        </Title>
        <div className="project">
          <Col offset={7}>
            <Card
              hoverable
              style={{
                width: 500,
              }}
              cover={<img alt="my project" src="https://aghniihsn.github.io/my-profile-website/img/project-hr.png" />}
            >
              <Meta title="Clodeo Reminder" description="clodeo reminder" />
            </Card>
          </Col>
        </div>
      </Content>
    </Layout>
  );
}
export default portofolio;
