import styled from "../../../utils/styled";
import { theme } from "../../../utils";

interface Props {
  size: keyof typeof theme.titleSizes;
  weight: 300 | 500;
  padded: boolean;
  colored: boolean;
}

export const TitleStyled = styled.h1<Props>(
  ({ theme, size, padded, colored, weight }) => ({
    fontSize: theme.titleSizes[size],
    fontWeight: weight,
    display: "inline-block",
    marginBottom: 0,
    lineHeight: 1,
    padding: padded ? "1em 0" : "0",
    color: colored ? theme.colors.blue : "#333",
  })
);
