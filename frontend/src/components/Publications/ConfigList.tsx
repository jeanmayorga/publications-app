import React, { useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Input, Row, Col, Select } from "antd";
import { useQueryParam } from "use-query-params";
import useDebouncy from "use-debouncy";

import styled from "../../utils/styled";

const ConfigListStyled = styled.div`
  width: 100%;
  margin-bottom: 1em;
`;

export function ConfigList() {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const [, setOrder] = useQueryParam<"asc" | "desc">("order");
  const [, setQuery] = useQueryParam<string | undefined>("query");

  useDebouncy(
    () => {
      if (searchQuery.length === 0) {
        setQuery(undefined);
        return;
      }
      setQuery(searchQuery);
    },
    400,
    [searchQuery]
  );

  return (
    <ConfigListStyled>
      <Row gutter={15}>
        <Col span={18}>
          <Input
            placeholder="Search publications.."
            onChange={(event) => setSearchQuery(event.target.value)}
            prefix={<SearchOutlined />}
          />
        </Col>
        <Col span={6}>
          <Select
            defaultValue="desc"
            style={{ width: "100%" }}
            onChange={(value) => setOrder(value)}
          >
            <Select.Option value="asc">Created At (asc)</Select.Option>
            <Select.Option value="desc">Created At (desc)</Select.Option>
          </Select>
        </Col>
      </Row>
    </ConfigListStyled>
  );
}
