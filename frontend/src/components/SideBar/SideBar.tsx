import React from "react";
import { Row, Col, Button } from "antd";
import { Link } from "react-router-dom";
import { AuthorsSideBar } from "..";
import { Padded } from "..";

export function SideBar() {
  return (
    <>
      <Padded>
        <Row
          gutter={5}
          style={{
            paddingBottom: "1em",
            marginBottom: "1em",
            borderBottom: "1px solid #eee",
          }}
        >
          <Col span={12}>
            <Link to="/">
              <Button shape="round" block>
                Home
              </Button>
            </Link>
          </Col>
          <Col span={12}>
            <Link to="/publications">
              <Button shape="round" block>
                Publications
              </Button>
            </Link>
          </Col>
        </Row>
      </Padded>
      <AuthorsSideBar />
    </>
  );
}
