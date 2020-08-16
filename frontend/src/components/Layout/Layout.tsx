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
      <Row gutter={15}>
        <Col xs={24} lg={7}>
          <SideBar />
        </Col>
        <Col xs={24} lg={17}>
          {children}
        </Col>
      </Row>
    </LayoutStyled>
  );
}
