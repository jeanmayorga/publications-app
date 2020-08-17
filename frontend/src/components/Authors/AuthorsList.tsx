import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AuthorsListStyled } from "./styles";
import { AuthorItemSkeleton } from "./AuthorItemSkeleton";
import { Dispatch, RootState } from "../../store";
import { setAuthors } from "../../store/modules/authors";
import { setFilteredAuthors } from "../../store/modules/filteredAuthors";
import { api } from "../../api";
import { AuthorItem } from "./AuthorItem";

export function AuthorsList() {
  const dispatch = useDispatch<Dispatch>();
  const [isLoading, setLoading] = useState<boolean>(true);

  const filteredAuthors = useSelector(
    (state: RootState) => state.filteredAuthors
  );

  useEffect(() => {
    const getAuthors = async () => {
      const response = await api.get(`/authors`, {
        params: {
          _sort: "birthDay",
          _order: "desc",
        },
      });
      dispatch(setAuthors(response.data));
      dispatch(setFilteredAuthors(response.data));
      setLoading(false);
    };
    getAuthors();
  }, [dispatch]);

  if (isLoading) {
    return (
      <AuthorsListStyled>
        {[1, 2, 3, 4, 5].map((item) => (
          <AuthorItemSkeleton key={item} />
        ))}
      </AuthorsListStyled>
    );
  }

  return (
    <AuthorsListStyled>
      {filteredAuthors.map((author) => (
        <AuthorItem key={author.id} author={author} />
      ))}
    </AuthorsListStyled>
  );
}
