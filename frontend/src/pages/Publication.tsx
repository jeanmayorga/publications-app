import React, { useEffect, useState } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import { Skeleton, Empty, Button } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

import { PageTitle, Title, Paragraph, DateFormatted } from "../components";
import { Publication } from "../interfaces";
import { api } from "../api";
import styled from "../utils/styled";

const Author = styled.div`
  margin: 1em 0;
  padding: 1em;
  background: ${({ theme }) => theme.colors.gray};
  border-radius: 15px;
  transition: all 0.3s;
  &:hover {
    transition: all 0.3s;
    background: ${({ theme }) => theme.colors.gray2};
  }
  p:last-of-type {
    margin-bottom: 0;
  }
`;

export function PublicationPage() {
  const { publicationId } = useParams();
  const history = useHistory();

  const [publication, setPublication] = useState<Publication | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  const deletePublication = async () => {
    setIsDeleting(true);
    try {
      await api.delete(`/publications/${publicationId}`);
    } catch (error) {
      console.log("Cannot delete publication");
    }
    setIsDeleting(false);
    history.push("/publications");
  };

  useEffect(() => {
    const getPublication = async (publicationId: string) => {
      try {
        const { data } = await api.get(
          `/publications/${publicationId}?_expand=author`
        );
        setPublication(data);
      } catch (error) {
        console.log("Cannot get publication");
      }
      setIsLoading(false);
    };
    getPublication(publicationId);
  }, [publicationId]);

  if (isLoading) {
    return (
      <div>
        <PageTitle title="" />
        <Title size="large">
          <Skeleton
            title={false}
            paragraph={{ rows: 1, width: "80px" }}
            active
          />
        </Title>
        <div>
          <Skeleton
            title={false}
            paragraph={{ rows: 1, width: "80px" }}
            active
          />
        </div>
        <Skeleton title={false} paragraph={{ rows: 2 }} active />
      </div>
    );
  }

  if (!publication) {
    return (
      <div>
        <PageTitle onBack={() => history.goBack()} title="Not found" />

        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={null}>
          <Title size="large">Publication not found</Title>
        </Empty>
      </div>
    );
  }

  return (
    <div>
      <PageTitle
        onBack={() => history.goBack()}
        title={`${publication.title.substr(0, 30)}...`}
        extra={[
          <Button
            key="1"
            icon={<DeleteOutlined />}
            danger
            shape="circle"
            loading={isDeleting}
            onClick={deletePublication}
          />,
        ]}
      />
      <Title size="large" colored>
        {publication.title}
      </Title>
      <div>
        <DateFormatted date={publication.createdAt} />
      </div>
      <Link to={`/authors/${publication.author.id}`}>
        <Author>
          <Title size="mini">
            {publication.author.firstName} {publication.author.lastName}
          </Title>
          <Paragraph>
            {publication.author.email}
            <br />
            <DateFormatted date={publication.author.birthDay} />
          </Paragraph>
        </Author>
      </Link>
      <Paragraph>{publication.body}</Paragraph>
    </div>
  );
}
