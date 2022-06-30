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
        <Col span={10} offset={2} xs={14} sm={16} md={17} lg={8} xl={8}>
          <Card
            hoverable
            style={{
              width: 400,
            }}
            cover={<img alt="my project" src="https://aghniihsn.github.io/profile/img/project-hr.png" />}
          >
            <Meta title="Clodeo Reminder" description="clodeo reminder" />
          </Card>
        </Col>
      </Content>
    </Layout>
  );
}
export default portofolio;
