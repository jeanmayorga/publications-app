import React from "react";

import { PubllicationItemStyled } from "./styles";
import { Publication } from "../../interfaces";
import { Title, Paragraph, DateFormatted } from "../common";
import { Link } from "react-router-dom";

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
        <Paragraph>
          {publication.body.length > 150
            ? `${publication.body.substr(0, 150)}...`
            : publication.body}
        </Paragraph>
      </PubllicationItemStyled>
    </Link>
  );
}
