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
        <h1 className="home-title">
          <i>Portofolio</i>
        </h1>
        <Row gutter={[16, 16]}>
          <Col className="col-img" span={8} xs={16} sm={20} md={14} lg={11} xl={12}>
            <Card hoverable cover={<img src="https://aghniihsn.github.io/profile/img/agenda.png" alt="img" />}>
              <Meta title="Clodeo Reminder" description="make agenda list" />
            </Card>
          </Col>
          <Col className="col-img" span={8} xs={16} sm={20} md={14} lg={11} xl={12}>
            <Card hoverable cover={<img src="https://aghniihsn.github.io/profile/img/user.png" alt="img" />}>
              <Meta title="Clodeo Reminder" description="make user list" />
            </Card>
          </Col>
          <Col className="col-img" span={8} xs={16} sm={20} md={14} lg={11} xl={12}>
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
