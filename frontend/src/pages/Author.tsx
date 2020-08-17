import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import {
  PageTitle,
  Title,
  Paragraph,
  DateFormatted,
  PublicationsList,
} from "../components";
import { Author } from "../interfaces";
import { api } from "../api";
import { Skeleton, Empty } from "antd";
import { useParams, useHistory } from "react-router-dom";
import { Dispatch } from "../store";
import { setPublications } from "../store/modules";

export function AuthorPage() {
  const dispatch = useDispatch<Dispatch>();
  const { authorId } = useParams();
  const history = useHistory();

  const [author, setAuthor] = useState<Author | null>(null);
  const [isLoadingPublications, setIsLoadingPublications] = useState<boolean>(
    true
  );
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const getPublications = async (authorId: string) => {
      try {
        const { data } = await api.get(`/authors/${authorId}/publications`);
        dispatch(setPublications(data));
      } catch (error) {
        console.log("Cannot get publications");
        console.log(error);
      }
      setIsLoadingPublications(false);
    };

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
    getAuthor(authorId).then(async () => {
      await getPublications(authorId);
    });
  }, [dispatch, authorId]);

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
      <PublicationsList isLoading={isLoadingPublications} />
    </div>
  );
}
