import React from "react";

import { PubllicationItemStyled } from "./styles";
import { Publication } from "../../interfaces";
import { Title, Paragraph, DateFormatted } from "../common";
import { Link } from "react-router-dom";
import { AuthorItem } from "../AuthorItem";

interface Props {
  publication: Publication;
}

export function PubllicationItem({ publication }: Props) {
  return (
    <Link to={`/publication/${publication.id}`}>
      <PubllicationItemStyled>
        <Title size="normal">{publication.title}</Title>
        <div>
          <DateFormatted date={publication.createdAt} />
        </div>
        {publication.author && (
          <Paragraph>
            {publication.author.firstName}, {publication.author.email}
          </Paragraph>
        )}
      </PubllicationItemStyled>
    </Link>
  );
}
