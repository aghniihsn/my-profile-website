import React from "react";
import "antd/dist/antd.css";
import { Typography, Layout, Card, Col, Row } from "antd";

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
        <Row gutter={[48, 24]}>
          <Col span={8} xs={24}>
            <Card hoverable cover={<img src="https://aghniihsn.github.io/profile/img/agenda.png" alt="img" />}>
              <Meta title="Clodeo Reminder" description="make agenda list" />
            </Card>
          </Col>
          <Col span={8} xs={24}>
            <Card hoverable cover={<img src="https://aghniihsn.github.io/profile/img/user.png" alt="img" />}>
              <Meta title="Clodeo Reminder" description="make user list" />
            </Card>
          </Col>
          <Col span={8} xs={24}>
            <Card hoverable cover={<img src="https://aghniihsn.github.io/profile/img/create.png" alt="img" />}>
              <Meta title="Clodeo Reminder" description="make form create user" />
            </Card>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
}
export default portofolio;
