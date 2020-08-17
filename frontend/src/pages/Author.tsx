import React, { useEffect, useState } from "react";

import { PageTitle, Title, Paragraph, DateFormatted } from "../components";
// import { AuthorItem } from "../components/AuthorItem/AuthorItem";
import { Author } from "../interfaces";
import { api } from "../api";
import { Skeleton, Empty } from "antd";
import { useParams, useHistory } from "react-router-dom";

export function AuthorPage() {
  const { authorId } = useParams();
  const history = useHistory();

  const [author, setAuthor] = useState<Author | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const getAuthor = async (authorId: string) => {
      try {
        const { data } = await api.get(`/authors/${authorId}`);
        setAuthor(data);
      } catch (error) {
        console.log("Cannot get author");
        console.log(error);
      }
      setIsLoading(false);
    };
    getAuthor(authorId);
  }, [authorId]);

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

  if (!author) {
    return (
      <div>
        <PageTitle onBack={() => history.goBack()} title="Not found" />

        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE}>
          <Title size="large">Author not found</Title>
        </Empty>
      </div>
    );
  }

  return (
    <div>
      <PageTitle
        onBack={() => history.goBack()}
        title={`${author.firstName} ${author.lastName}`}
      />
      <Title size="large">
        {author.firstName} {author.lastName}
      </Title>
      <div>
        <DateFormatted date={author.birthDay} />
      </div>
      <Paragraph>{author.email}</Paragraph>
      {/* <ListOfPublications authorId={author.id} /> */}
    </div>
  );
}
