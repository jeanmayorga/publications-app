import React from "react";
import { Link } from "react-router-dom";

import { Title, Paragraph, DateFormatted } from "../common";
import { PublicationItemStyled } from "./styles";
import { Publication } from "../../interfaces";

interface Props {
  publication: Publication;
}

export function PublicationItem({ publication }: Props) {
  return (
    <Link to={`/publication/${publication.id}`}>
      <PublicationItemStyled>
        <Title size="normal" colored>
          {publication.title}
        </Title>
        <div>
          <DateFormatted date={publication.createdAt} />
        </div>
        {publication.author && (
          <Paragraph>
            {publication.author.firstName}, {publication.author.email}
          </Paragraph>
        )}
      </PublicationItemStyled>
    </Link>
  );
}
