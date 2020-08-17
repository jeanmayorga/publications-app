import { Skeleton } from "antd";

import styled from "../../utils/styled";

export const AuthorItemOutStyled = styled.div`
  .active {
    width: 100%;
    height: 100%;
    background: #cae6ff;
    display: block;
  }
`;

export const AuthorItemStyled = styled.div`
  margin: auto;
  width: 100%;
  display: flex;
  padding: 0.6em 1em;
  border-bottom: 1px solid #ddd;
  transition: all 0.3s;
  user-select: none;
  &:hover {
    background: #cae6ff;
    transition: all 0.3s;
  }
`;

export const AuthorItemBody = styled.div`
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

export const AuthorsListStyled = styled.div`
  width: 100%;
`;
