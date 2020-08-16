import React from "react";
import { Avatar } from "antd";

import { Author } from "../../interfaces/Author";
import { DateFormatted, Title, Paragraph } from "../common";

import { AuthorItemStyled, Body } from "./styles";
import { Link } from "react-router-dom";

interface Props {
  author: Author;
}

export function AuthorItem({ author }: Props) {
  return (
    <Link to={`/authors/${author.id}`}>
      <AuthorItemStyled>
        <Avatar size={30} />
        <Body>
          <Title size="mini">
            {author.firstName} {author.lastName}
          </Title>
          <Paragraph>
            {author.email}
            <br />
            <DateFormatted date={author.birthDay} />
          </Paragraph>
        </Body>
      </AuthorItemStyled>
    </Link>
  );
}
