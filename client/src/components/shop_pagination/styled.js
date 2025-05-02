import styled from "styled-components";

export const PaginationMainDiv = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  gap: 8px;
`;

export const PaginationNumbers = styled.div`
  display: inline;
  height: 20px;
  cursor: pointer;
  margin-top: 7px;
  &:hover{
    text-decoration: underline;
    color: darkblue;
  }
`;
