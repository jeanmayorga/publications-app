import React, { useEffect, useState } from "react";

import { api } from "../../api";

import { Author } from "../../interfaces/Author";
import { AuthorItemSkeleton, AuthorItem } from "..";
import { ListOfAuthorsStyled } from "./styles";

export function ListOfAuthors() {
  const [authors, setAuthors] = useState<Author[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getAuthors = async () => {
      const response = await api.get(`/authors`);
      setAuthors(response.data);
      setLoading(false);
    };
    getAuthors();
  }, []);

  if (isLoading) {
    return (
      <ListOfAuthorsStyled>
        {[1, 2, 3, 4, 5].map((item) => (
          <AuthorItemSkeleton key={item} />
        ))}
      </ListOfAuthorsStyled>
    );
  }

  return (
    <ListOfAuthorsStyled>
      {authors.map((author) => (
        <AuthorItem author={author} />
      ))}
    </ListOfAuthorsStyled>
  );
}
