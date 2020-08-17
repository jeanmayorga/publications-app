import styled from "../../utils/styled";
import { PageTitle } from "../common";

export const LayoutStyled = styled.section`
  background: ${({ theme }) => theme.colors.white};
  margin: auto;
  width: 100%;
  @media (min-width: 992px) {
    width: 992px;
    border-radius: 15px;
  }
`;

export const ChildrenStyled = styled.div`
  padding: 0 1em;
`;

export const SidebarStyled = styled.div`
  padding: 0;
`;

export const PageTitleStyled = styled(PageTitle)`
  .ant-page-header {
    margin-bottom: 0 !important;
  }
`;

export const SideBarContentStyled = styled.section`
  display: none;
  @media (min-width: 992px) {
    display: block;
  }
`;
export const SideBarButtonStyled = styled.div`
  display: block;
  @media (min-width: 992px) {
    display: none;
  }
`;
