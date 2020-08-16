import React from "react";
import { Input, Row, Col } from "antd";
import { SearchOutlined } from "@ant-design/icons";

import { PublicationsHeadStyled } from "./styles";

export function PublicationsHead() {
  return (
    <PublicationsHeadStyled>
      <Row>
        <Col span={18}>
          <Input
            size="large"
            placeholder="Search publications.."
            prefix={<SearchOutlined />}
          />
        </Col>
        <Col span={6}>asdas</Col>
      </Row>
    </PublicationsHeadStyled>
  );
}
