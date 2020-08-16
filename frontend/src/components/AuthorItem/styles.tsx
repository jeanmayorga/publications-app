import { Skeleton } from "antd";

import styled from "../../utils/styled";

export const AuthorItemStyled = styled.div`
  margin: auto;
  width: 100%;
  display: flex;
  padding: 0.6em 1em;
  border-bottom: 1px solid #ddd;
  transition: all 0.3s;
  user-select: none;
  &:hover {
    background: #eee;
    transition: all 0.3s;
  }
`;

export const Body = styled.div`
  margin-left: 1em;
  width: 100%;
  h1 {
    line-height: 1.3;
    color: #7d7d7d;
    margin-bottom: 0;
  }
  p {
    line-height: 1.3;
    color: #7d7d7d;
    margin-bottom: 0;
  }
`;

export const SkeletonStyled = styled(Skeleton)`
  .ant-skeleton-paragraph {
    margin-bottom: 0;
  }
  .ant-skeleton-paragraph > li {
    width: 100%;
  }
  .ant-skeleton-paragraph > li + li {
    margin-top: 5px;
  }
`;
