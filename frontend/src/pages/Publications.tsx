import React, { useEffect, useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Button, Modal } from "antd";
import { useDispatch } from "react-redux";
import { useQueryParam, NumberParam } from "use-query-params";

import { Title, Pagination, ConfigList, PublicationsList } from "../components";
import { api } from "../api";
import { Dispatch } from "../store";
import { setPublications } from "../store/modules/publications";
import { Publication } from "../interfaces";

import styled from "../utils/styled";
import { PublicationModal } from "../components/Publications/PublicationModal";

const HeadList = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const fetchPublications = async (options: {
  page?: number | null;
  sort?: string;
  order?: "asc" | "desc";
  query?: string;
}): Promise<Publication[]> => {
  let response = await api.get(`/publications`, {
    params: {
      _expand: "author",
      _limit: 5,
      _page: options.page ?? 1,
      _sort: options.sort ?? "createdAt",
      _order: options.order ?? "desc",
      title_like: options.query,
    },
  });

  return response.data;
};

export function Publications() {
  const dispatch = useDispatch<Dispatch>();

  const [isLoading, setLoading] = useState<boolean>(true);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const [page] = useQueryParam("page", NumberParam);
  const [order] = useQueryParam<"asc" | "desc">("order");
  const [query] = useQueryParam<string | undefined>("query");

  useEffect(() => {
    const getPublications = async () => {
      // setLoading(true);
      const data = await fetchPublications({ page, order, query });
      dispatch(setPublications(data));
      setLoading(false);
    };
    getPublications();
  }, [dispatch, page, order, query]);

  return (
    <>
      <Modal
        title="Add publication"
        visible={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
      >
        <PublicationModal setIsModalOpen={setIsModalOpen} />
      </Modal>
      <HeadList>
        <Title size="large" padded>
          Publications
        </Title>
        <Button
          type="primary"
          shape="round"
          onClick={() => setIsModalOpen(true)}
        >
          <PlusOutlined />
          New Publication
        </Button>
      </HeadList>

      <ConfigList />
      <Pagination />
      <PublicationsList isLoading={isLoading} />
    </>
  );
}
