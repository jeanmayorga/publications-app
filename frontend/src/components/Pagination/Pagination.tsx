import React from "react";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useSelector } from "react-redux";
import { useQueryParam, NumberParam } from "use-query-params";

import { RootState } from "../../store";

import styled from "../../utils/styled";

const PaginationStyled = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1em;
`;

export function Pagination() {
  const publications = useSelector((state: RootState) => state.publications);

  const [page, setPage] = useQueryParam("page", NumberParam);

  const pageNumber = page ?? 1;

  return (
    <PaginationStyled>
      <Button
        icon={<ArrowLeftOutlined />}
        shape="round"
        onClick={() => setPage(pageNumber - 1)}
        disabled={!page || page === 1}
      >
        Prev
      </Button>
      <Button
        icon={<ArrowRightOutlined />}
        shape="round"
        onClick={() => setPage(pageNumber + 1)}
        disabled={publications.length < 5}
      >
        Next
      </Button>
    </PaginationStyled>
  );
}
