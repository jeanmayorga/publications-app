import React from "react";
import { PageHeader } from "antd";
import { PageHeaderProps } from "antd/lib/page-header";

import styled from "../../../utils/styled";

const StyledPageHeader = styled(PageHeader)`
  padding: 0;
  height: 50px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
  @media (min-width: 992px) {
    margin-bottom: 1em;
  }
  .ant-page-header-heading {
    width: 100%;
    .ant-page-header-heading-title {
      font-weight: 400;
    }
  }
`;

export function PageTitle({ ...rest }: PageHeaderProps) {
  return <StyledPageHeader {...rest} />;
}
