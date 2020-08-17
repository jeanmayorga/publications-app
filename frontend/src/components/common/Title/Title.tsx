import React from "react";
import { TitleStyled } from "./styles";
import { theme } from "../../../utils";

interface TitleProps {
  size: keyof typeof theme.titleSizes;
  weight?: 300 | 500;
  padded?: boolean;
  colored?: boolean;
  children: React.ReactNode;
}

export function Title({
  size,
  weight = 300,
  padded = false,
  colored = false,
  children,
}: TitleProps) {
  return (
    <TitleStyled size={size} padded={padded} colored={colored} weight={weight}>
      {children}
    </TitleStyled>
  );
}
