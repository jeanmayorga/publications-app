import React from "react";
import styled from "../../../utils/styled";

const StyledParagraph = styled.p`
  padding: 0;
  color: #7b7b7b;
`;

interface Props {
  children: React.ReactNode;
}

export function Paragraph({ children }: Props) {
  return <StyledParagraph>{children}</StyledParagraph>;
}
