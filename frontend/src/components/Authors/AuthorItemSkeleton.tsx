import React from "react";

import { Title } from "../common";

import { AuthorItemStyled, AuthorItemBody, SkeletonStyled } from "./styles";

export function AuthorItemSkeleton() {
  return (
    <AuthorItemStyled>
      <AuthorItemBody>
        <Title size="mini">
          <SkeletonStyled
            title={false}
            paragraph={{ rows: 1, width: "80px" }}
            active
          />
        </Title>
        <SkeletonStyled title={false} paragraph={{ rows: 2 }} active />
      </AuthorItemBody>
    </AuthorItemStyled>
  );
}
