import React from "react";

import { SideBar } from "..";
import { LayoutStyled } from "./styles";
import { Header } from "../Header";
import { Row, Col } from "antd";

interface Props {
  children: React.ReactNode;
}

export function Layout({ children }: Props) {
  return (
    <LayoutStyled>
      <Header />
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
