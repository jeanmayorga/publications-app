import React, { useEffect, useState } from "react";

import { api } from "../../api";

import { Publication } from "../../interfaces";

import { ListOfPublicationsStyled } from "./styles";
import { PubllicationItem, PubllicationItemSkeleton } from "..";

export function ListOfPublications() {
  const [publications, setPublications] = useState<Publication[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getAuthors = async () => {
      const response = await api.get(`/publications`);
      setPublications(response.data);
      setLoading(false);
    };
    getAuthors();
  }, []);

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
    </ListOfPublicationsStyled>
  );
}
