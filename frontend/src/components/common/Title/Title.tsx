import React from "react";
import { TitleStyled } from "./styles";
import { theme } from "../../../utils";

interface TitleProps {
  size: keyof typeof theme.titleSizes;
  weight?: 300 | 500;
  children: React.ReactNode;
}

export function Title({ size, weight = 300, children }: TitleProps) {
  return (
    <TitleStyled size={size} weight={weight}>
      {children}
    </TitleStyled>
  );
}
