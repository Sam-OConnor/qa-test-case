import React from "react";
import { Row, Col } from "antd";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <Row align="middle" justify="center">
      <Col xs={22} sm={16} md={12} lg={10} xl={8}>
        <Outlet />
      </Col>
    </Row>
  );
};

export default Layout;
