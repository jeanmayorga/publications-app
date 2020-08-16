import styled from "../../utils/styled";

export const LayoutStyled = styled.section`
  background: ${({ theme }) => theme.colors.white};
  margin: auto;
  width: 100%;
  @media (min-width: 992px) {
    width: 992px;
    border-radius: 15px;
  }
`;
