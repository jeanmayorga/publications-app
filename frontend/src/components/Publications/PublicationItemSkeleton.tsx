import React from "react";
import { Skeleton } from "antd";

import { PublicationItemStyled } from "./styles";

export function PublicationItemSkeleton() {
  return (
    <PublicationItemStyled>
      <Skeleton title={false} paragraph={{ rows: 1, width: "80px" }} active />
      <Skeleton title={false} paragraph={{ rows: 2 }} active />
    </PublicationItemStyled>
  );
}
