import React from "react";
import { Avatar, Skeleton } from "antd";

import { Title, Paragraph } from "../common";

import { AuthorItemStyled, Body, SkeletonStyled } from "./styles";

export function AuthorItemSkeleton() {
  return (
    <AuthorItemStyled>
      <Avatar size={30} />
      <Body>
        <Title size="mini">
          <SkeletonStyled
            title={false}
            paragraph={{ rows: 1, width: "80px" }}
          />
        </Title>
        <Paragraph>
          <SkeletonStyled title={false} paragraph={{ rows: 2 }} />
        </Paragraph>
      </Body>
    </AuthorItemStyled>
  );
}
