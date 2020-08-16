import React, { useEffect } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useDispatch } from "react-redux";

import { ListOfPublications, PublicationsHead, Title } from "../components";
import styled from "../utils/styled";
import { api } from "../api";
import { Dispatch } from "../store";
import { setPublications } from "../store/modules/publications";
import { Publication } from "../interfaces";

const HeadList = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const getPublications = async (options: {
  page?: number;
  sort?: string;
  order?: "asc" | "desc";
  query?: string;
}): Promise<Publication[]> => {
  let response = await api.get(`/publications`, {
    params: {
      _expand: "author",
      _limit: 2,
      _page: options.page ?? 1,
      _sort: options.sort ?? "createdAt",
      _order: options.order ?? "desc",
      q: options.query,
    },
  });

  return response.data;
};

export function Publications() {
  const dispatch = useDispatch<Dispatch>();

  useEffect(() => {
    getPublications({}).then((response) => {
      dispatch(setPublications(response));
      console.log(response);
    });
  }, []);

  return (
    <>
      <HeadList>
        <Title size="large" padded>
          Publications
        </Title>
        <Button type="primary" shape="round">
          <PlusOutlined />
          Create Publication
        </Button>
      </HeadList>
      <PublicationsHead />
      <ListOfPublications />
    </>
  );
}
