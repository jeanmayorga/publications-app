import React, { useEffect, useState } from "react";

import { api } from "../../api";

import { Publication } from "../../interfaces";

import { ListOfPublicationsStyled } from "./styles";
import { PubllicationItem, PubllicationItemSkeleton } from "..";
import { Empty } from "antd";

interface Props {
  authorId?: number;
}

export function ListOfPublications({ authorId }: Props) {
  const [publications, setPublications] = useState<Publication[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getPublications = async (authorId: number | undefined) => {
      let response = await api.get(`/publications`);

      if (authorId) {
        response = await api.get(`authors/${authorId}/publications`);
      }

      setPublications(response.data);
      setLoading(false);
    };

    getPublications(authorId);

    return () => {
      setLoading(true);
      setPublications([]);
    };
  }, [authorId]);

  if (isLoading) {
    return (
      <ListOfPublicationsStyled>
        {[1, 2, 3, 4, 5].map((item) => (
          <PubllicationItemSkeleton key={item} />
        ))}
      </ListOfPublicationsStyled>
    );
  }

  return (
    <ListOfPublicationsStyled>
      {publications.map((publication) => (
        <PubllicationItem publication={publication} />
      ))}
      {publications.length === 0 && (
        <Empty
          image={Empty.PRESENTED_IMAGE_SIMPLE}
          description="The author has no publications"
        ></Empty>
      )}
    </ListOfPublicationsStyled>
  );
}
