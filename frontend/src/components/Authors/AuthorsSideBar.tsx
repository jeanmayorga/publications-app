import React from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Input, Select } from "antd";

import { AuthorsList } from ".";
import { Title } from "..";
import styled from "../../utils/styled";
import { Padded } from "..";

const BlockStyled = styled.div`
  padding: 0.5em 0;
`;

export function AuthorsSideBar() {
  return (
    <div>
      <Padded>
        <Title size="normal">Authors</Title>
        <BlockStyled>
          <Input placeholder="Search authros.." prefix={<SearchOutlined />} />
        </BlockStyled>
        <BlockStyled>
          <Select defaultValue="desc" style={{ width: "100%" }}>
            <Select.Option value="asc">Created At (asc)</Select.Option>
            <Select.Option value="desc">Created At (desc)</Select.Option>
          </Select>
        </BlockStyled>
      </Padded>
      <AuthorsList />
    </div>
  );
}
