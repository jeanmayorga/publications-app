import React, { useState } from "react";
import { Row, Col, Button, Drawer } from "antd";
import { AlignRightOutlined } from "@ant-design/icons";

import {
  LayoutStyled,
  ChildrenStyled,
  SidebarStyled,
  SideBarContentStyled,
  SideBarButtonStyled,
} from "./styles";
import { PageTitle, SideBar, Padded } from "..";

interface Props {
  children: React.ReactNode;
}

export function Layout({ children }: Props) {
  const [isMenuActive, setIsMenuActive] = useState<boolean>(false);

  return (
    <LayoutStyled>
      <Drawer
        title="Publications App"
        placement="left"
        width="80%"
        closable={true}
        onClose={() => setIsMenuActive(false)}
        visible={isMenuActive}
      >
        <SideBar />
      </Drawer>
      <Row gutter={5}>
        <Col xs={24} lg={7}>
          <SidebarStyled>
            <Padded>
              <PageTitle
                title="Publications App"
                extra={[
                  <SideBarButtonStyled key="1">
                    <Button
                      shape="circle"
                      icon={<AlignRightOutlined />}
                      onClick={() => setIsMenuActive(true)}
                    />
                  </SideBarButtonStyled>,
                ]}
              />
            </Padded>
            <SideBarContentStyled>
              <SideBar />
            </SideBarContentStyled>
          </SidebarStyled>
        </Col>
        <Col xs={24} lg={17}>
          <ChildrenStyled>{children}</ChildrenStyled>
        </Col>
      </Row>
    </LayoutStyled>
  );
}
