import React from "react";

import { Author } from "../../interfaces/Author";
import { DateFormatted, Title, Paragraph } from "../common";

import {
  AuthorItemStyled,
  AuthorItemBody,
  AuthorItemOutStyled,
} from "./styles";
import { NavLink } from "react-router-dom";

interface Props {
  author: Author;
}

export function AuthorItem({ author }: Props) {
  return (
    <AuthorItemOutStyled>
      <NavLink to={`/authors/${author.id}`}>
        <AuthorItemStyled>
          <AuthorItemBody>
            <Title size="mini">
              {author.firstName} {author.lastName}
            </Title>
            <Paragraph>
              {author.email}
              <br />
              <DateFormatted date={author.birthDay} />
            </Paragraph>
          </AuthorItemBody>
        </AuthorItemStyled>
      </NavLink>
    </AuthorItemOutStyled>
  );
}
