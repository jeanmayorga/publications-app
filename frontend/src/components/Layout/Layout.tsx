import React from "react";
import { Row, Col } from "antd";

import { SideBar } from "..";
import { LayoutStyled } from "./styles";

interface Props {
  children: React.ReactNode;
}

export function Layout({ children }: Props) {
  return (
    <LayoutStyled>
      <Row>
        <Col xs={24} lg={6}>
          <SideBar />
        </Col>
        <Col xs={24} lg={18}>
          {children}
        </Col>
      </Row>
    </LayoutStyled>
  );
}
