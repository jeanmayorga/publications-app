import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
import useDebouncy from "use-debouncy";

import { AuthorsList } from ".";
import { Title } from "..";
import styled from "../../utils/styled";
import { Padded } from "..";
import { RootState, Dispatch } from "../../store";
import { setFilteredAuthors } from "../../store/modules/filteredAuthors";

const BlockStyled = styled.div`
  padding: 0.5em 0;
`;

export function AuthorsSideBar() {
  const dispatch = useDispatch<Dispatch>();

  const [searchQuery, setSearchQuery] = useState<string>("");

  const authors = useSelector((state: RootState) => state.authors);

  useDebouncy(
    () => {
      if (!authors) {
        return;
      }
      if (searchQuery.length === 0) {
        dispatch(setFilteredAuthors(authors));
        return;
      }
      const query = searchQuery.toLowerCase();
      const filtered = authors.filter((author) => {
        return (
          author.firstName?.includes(query) ||
          author.lastName?.includes(query) ||
          author.email?.includes(query)
        );
      });
      dispatch(setFilteredAuthors(filtered));
    },
    400,
    [searchQuery]
  );

  return (
    <div>
      <Padded>
        <Title size="normal">Authors</Title>
        <BlockStyled>
          <Input
            placeholder="Search authros.."
            onChange={(event) => setSearchQuery(event.target.value)}
            prefix={<SearchOutlined />}
          />
        </BlockStyled>
      </Padded>
      <AuthorsList />
    </div>
  );
}
