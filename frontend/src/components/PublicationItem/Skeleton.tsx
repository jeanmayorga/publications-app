import React from "react";
import { Skeleton } from "antd";

import { PubllicationItemStyled } from "./styles";

export function PubllicationItemSkeleton() {
  return (
    <PubllicationItemStyled>
      <Skeleton title={false} paragraph={{ rows: 1, width: "80px" }} active />
      <Skeleton title={false} paragraph={{ rows: 2 }} active />
    </PubllicationItemStyled>
  );
}
