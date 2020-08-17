import { PaddedStyled } from "./styles";
import React from "react";

interface Props {
  children: React.ReactNode;
}

export function Padded({ children }: Props) {
  return <PaddedStyled>{children}</PaddedStyled>;
}
