import styled from "../../utils/styled";
import { theme } from "../../utils";

export const PublicationsListStyled = styled.div`
  width: 100%;
`;

export const PublicationItemStyled = styled.div`
  width: 100%;
  background: #fff;
  margin-bottom: 1em;
  border: 1px solid #eee;
  padding: 1em;
  border-radius: 15px;
  transition: all 0.3s;
  &:hover {
    border: 1px solid ${theme.colors.blue};
    transition: all 0.3s;
  }
  p {
    &:last-of-type {
      margin-bottom: 0;
    }
  }
`;
