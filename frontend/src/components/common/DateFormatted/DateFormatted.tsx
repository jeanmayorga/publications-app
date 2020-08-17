import React from "react";
import { format } from "date-fns";

import { DateStyled } from "./styles";

interface Props {
  date: string | number | Date;
}

export function DateFormatted({ date }: Props) {
  const transformed = new Date(date);
  return (
    <DateStyled>{format(transformed, "EEEE, MMMM d, yyyy H:mm	")}</DateStyled>
  );
}
