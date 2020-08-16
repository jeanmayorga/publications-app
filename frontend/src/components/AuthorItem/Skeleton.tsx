import React from "react";
import { Skeleton } from "antd";

import { Title, Paragraph } from "../common";

import { AuthorItemStyled, Body, SkeletonStyled } from "./styles";

export function AuthorItemSkeleton() {
  return (
    <AuthorItemStyled>
      <Skeleton.Avatar size={30} active />
      <Body>
        <Title size="mini">
          <SkeletonStyled
            title={false}
            paragraph={{ rows: 1, width: "80px" }}
            active
          />
        </Title>
        <Paragraph>
          <SkeletonStyled title={false} paragraph={{ rows: 2 }} active />
        </Paragraph>
      </Body>
    </AuthorItemStyled>
  );
}
