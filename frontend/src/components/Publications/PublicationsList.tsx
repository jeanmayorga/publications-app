import React from "react";
import { useSelector } from "react-redux";
import { Empty } from "antd";

import { RootState } from "../../store";
import { PublicationsListStyled } from "./styles";
import { PublicationItem, PublicationItemSkeleton } from ".";
import { Link } from "react-router-dom";

interface Props {
  isLoading: boolean;
}

export function PublicationsList({ isLoading }: Props) {
  const publications = useSelector((state: RootState) => state.publications);

  if (isLoading) {
    return (
      <PublicationsListStyled>
        {[1, 2, 3].map((item) => (
          <PublicationItemSkeleton key={item} />
        ))}
      </PublicationsListStyled>
    );
  }

  return (
    <PublicationsListStyled>
      {publications.map((publication) => (
        <PublicationItem key={publication.id} publication={publication} />
      ))}
      {publications.length === 0 && (
        <Empty
          image={Empty.PRESENTED_IMAGE_SIMPLE}
          description="No publications"
        >
          <Link to="/publications">Go to publications and create one</Link>
        </Empty>
      )}
    </PublicationsListStyled>
  );
}
